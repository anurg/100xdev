const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const simulateRealTimeDistribution = (csvFilePath) => {
    return new Promise((resolve, reject) => {
        const coupons = [];
        fs.createReadStream(csvFilePath)
            .pipe(csv(['couponNumber']))
            .on('data', (row) => {
                coupons.push(row.couponNumber);
            })
            .on('error', (error) => {
                console.error('Error reading input CSV:', error);
                reject(error);
            })
            .on('end', () => {
                const totalCoupons = coupons.length;
                const daysInScheme = 10; // 10-day scheme
                const couponsPerDay = Math.ceil(totalCoupons / daysInScheme);

                let results = [];
                let processedCoupons = 0;

                const rewardCategories = [
                    { name: '1st Category', count: 1000, dailyTarget: Math.ceil(1000 / daysInScheme) },
                    { name: '2nd Category', count: 1000, dailyTarget: Math.ceil(1000 / daysInScheme) },
                    { name: '3rd Category', count: 1000, dailyTarget: Math.ceil(1000 / daysInScheme) },
                    { name: '4th Category', count: 2000, dailyTarget: Math.ceil(2000 / daysInScheme) },
                    { name: '5th Category', count: 20000, dailyTarget: Math.ceil(20000 / daysInScheme) }
                ];

                const totalRewards = rewardCategories.reduce((sum, category) => sum + category.count, 0);
                const rewardsPerDay = Math.ceil(totalRewards / daysInScheme);

                // Calculate the interval for each category
                rewardCategories.forEach(category => {
                    category.interval = Math.floor(couponsPerDay / category.dailyTarget);
                });

                for (let day = 1; day <= daysInScheme; day++) {
                    let dailyDistribution = rewardCategories.reduce((acc, category) => {
                        acc[category.name] = 0;
                        return acc;
                    }, {'Better Luck Next Time': 0});

                    // Reset counters for each category
                    const categoryCounters = rewardCategories.reduce((acc, category) => {
                        acc[category.name] = 0;
                        return acc;
                    }, {});

                    for (let i = 0; i < couponsPerDay && processedCoupons < totalCoupons; i++) {
                        const couponNumber = coupons[processedCoupons];
                        let reward = 'Better Luck Next Time';

                        for (const category of rewardCategories) {
                            if (category.count > 0 && categoryCounters[category.name] >= category.interval) {
                                reward = category.name;
                                category.count--;
                                categoryCounters[category.name] = 0;
                                break;
                            }
                        }

                        results.push({ couponNumber, reward, day });
                        processedCoupons++;
                        dailyDistribution[reward]++;

                        // Increment counters for each category
                        rewardCategories.forEach(category => {
                            categoryCounters[category.name]++;
                        });
                    }

                    console.log(`Day ${day} Distribution:`, dailyDistribution);
                    console.log(`Remaining rewards after Day ${day}:`, rewardCategories.map(cat => ({ name: cat.name, remaining: cat.count })));

                    if (processedCoupons >= totalCoupons) break;
                }

                // Distribute any remaining rewards
                while (processedCoupons < totalCoupons) {
                    const couponNumber = coupons[processedCoupons];
                    let reward = 'Better Luck Next Time';

                    for (const category of rewardCategories) {
                        if (category.count > 0) {
                            reward = category.name;
                            category.count--;
                            break;
                        }
                    }

                    results.push({ couponNumber, reward, day: daysInScheme });
                    processedCoupons++;
                }

                // Analyze results
                const totalDistribution = results.reduce((acc, {reward}) => {
                    acc[reward] = (acc[reward] || 0) + 1;
                    return acc;
                }, {});

                console.log('Total Distribution:', totalDistribution);
                console.log('Remaining rewards in each category:');
                rewardCategories.forEach(category => {
                    console.log(`${category.name}: ${category.count}`);
                });

                // Write results back to CSV
                const csvWriter = createCsvWriter({
                    path: csvFilePath.replace('.csv', '_results.csv'),
                    header: [
                        {id: 'couponNumber', title: 'CouponNumber'},
                        {id: 'reward', title: 'Reward'},
                        {id: 'day', title: 'Day'}
                    ]
                });

                csvWriter.writeRecords(results)
                    .then(() => {
                        console.log('CSV file with results was created successfully');
                        resolve(results);
                    })
                    .catch(error => {
                        console.error('Error writing to CSV:', error);
                        reject(error);
                    });
            });
    });
};

// Usage
simulateRealTimeDistribution('coupon_data.csv')
    .then(results => console.log('Simulation completed successfully'))
    .catch(error => console.error('Error during simulation:', error));