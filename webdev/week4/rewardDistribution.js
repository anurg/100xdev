const fs = require("fs");
const csv = require("csv-parser");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const simulateRealTimeDistribution = (csvFilePath) => {
  return new Promise((resolve, reject) => {
    const coupons = [];
    fs.createReadStream(csvFilePath)
      .pipe(csv(["couponNumber"]))
      .on("data", (row) => {
        coupons.push(row.couponNumber);
      })
      .on("error", (error) => {
        console.error("Error reading input CSV:", error);
        reject(error);
      })
      .on("end", () => {
        const totalCoupons = coupons.length;
        const daysInScheme = 10; // 10-day scheme
        const couponsPerDay = Math.ceil(totalCoupons / daysInScheme);

        let results = [];
        let processedCoupons = 0;

        const rewardCategories = [
          { name: "1st Category", count: 5, dailyTarget: 0.5 },
          { name: "2nd Category", count: 2, dailyTarget: 0.2 },
          { name: "3rd Category", count: 1000, dailyTarget: 100 },
          { name: "4th Category", count: 2000, dailyTarget: 200 },
          { name: "5th Category", count: 20000, dailyTarget: 2000 },
        ];

        const totalRewards = rewardCategories.reduce(
          (sum, category) => sum + category.count,
          0
        );

        // Prepare categories
        rewardCategories.forEach((category) => {
          if (category.dailyTarget < 1) {
            // For infrequent rewards
            category.isInfrequent = true;
            category.distributionDays = Array.from(
              { length: category.count },
              (_, i) => Math.floor((i * daysInScheme) / category.count) + 1
            );
            category.nextDistributionDay = category.distributionDays.shift();
          } else {
            // For frequent rewards
            category.isInfrequent = false;
            category.interval = Math.max(
              1,
              Math.floor(couponsPerDay / category.dailyTarget)
            );
          }
        });
        console.log("Printing Reward Categories after manipulation.");
        console.log(rewardCategories);
        console.log("Printing End.");
        for (let day = 1; day <= daysInScheme; day++) {
          let dailyDistribution = rewardCategories.reduce(
            (acc, category) => {
              acc[category.name] = 0;
              return acc;
            },
            { "Better Luck Next Time": 0 }
          );

          // Reset counters for each category
          const categoryCounters = rewardCategories.reduce((acc, category) => {
            acc[category.name] = 0;
            return acc;
          }, {});

          for (
            let i = 0;
            i < couponsPerDay && processedCoupons < totalCoupons;
            i++
          ) {
            const couponNumber = coupons[processedCoupons];
            let reward = "Better Luck Next Time";

            // Try to distribute infrequent rewards first
            for (const category of rewardCategories) {
              if (
                category.isInfrequent &&
                category.count > 0 &&
                day === category.nextDistributionDay
              ) {
                reward = category.name;
                category.count--;
                category.nextDistributionDay =
                  category.distributionDays.shift() || Infinity;
                break;
              }
            }

            // If no infrequent reward was distributed, try frequent rewards
            if (reward === "Better Luck Next Time") {
              for (const category of rewardCategories) {
                if (
                  !category.isInfrequent &&
                  category.count > 0 &&
                  categoryCounters[category.name] >= category.interval
                ) {
                  reward = category.name;
                  category.count--;
                  categoryCounters[category.name] = 0;
                  break;
                }
              }
            }

            results.push({ couponNumber, reward, day });
            processedCoupons++;
            dailyDistribution[reward]++;

            // Increment counters for frequent categories
            rewardCategories.forEach((category) => {
              if (!category.isInfrequent) {
                categoryCounters[category.name]++;
              }
            });
          }

          console.log(`Day ${day} Distribution:`, dailyDistribution);
          console.log(
            `Remaining rewards after Day ${day}:`,
            rewardCategories.map((cat) => ({
              name: cat.name,
              remaining: cat.count,
            }))
          );

          // Adjust intervals for remaining days
          const remainingDays = daysInScheme - day;
          if (remainingDays > 0) {
            rewardCategories.forEach((category) => {
              if (!category.isInfrequent && category.count > 0) {
                category.interval = Math.max(
                  1,
                  Math.floor((couponsPerDay * remainingDays) / category.count)
                );
              }
            });
          }

          if (processedCoupons >= totalCoupons) break;
        }

        // Distribute any remaining rewards
        let remainingRewardsCount = rewardCategories.reduce(
          (sum, category) => sum + category.count,
          0
        );
        while (remainingRewardsCount > 0 && processedCoupons < totalCoupons) {
          const couponNumber = coupons[processedCoupons];
          let reward = "Better Luck Next Time";

          for (const category of rewardCategories) {
            if (category.count > 0) {
              reward = category.name;
              category.count--;
              remainingRewardsCount--;
              break;
            }
          }

          results.push({ couponNumber, reward, day: daysInScheme });
          processedCoupons++;
        }

        // Analyze results
        const totalDistribution = results.reduce((acc, { reward }) => {
          acc[reward] = (acc[reward] || 0) + 1;
          return acc;
        }, {});

        console.log("Total Distribution:", totalDistribution);
        console.log("Remaining rewards in each category:");
        rewardCategories.forEach((category) => {
          console.log(`${category.name}: ${category.count}`);
        });

        // Write results back to CSV
        const csvWriter = createCsvWriter({
          path: csvFilePath.replace(".csv", "_results.csv"),
          header: [
            { id: "couponNumber", title: "CouponNumber" },
            { id: "reward", title: "Reward" },
            { id: "day", title: "Day" },
          ],
        });

        csvWriter
          .writeRecords(results)
          .then(() => {
            console.log("CSV file with results was created successfully");
            resolve(results);
          })
          .catch((error) => {
            console.error("Error writing to CSV:", error);
            reject(error);
          });
      });
  });
};

// Usage
simulateRealTimeDistribution("coupon_data.csv")
  .then((results) => console.log("Simulation completed successfully"))
  .catch((error) => console.error("Error during simulation:", error));
