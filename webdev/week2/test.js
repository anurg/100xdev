// // Example 1: Simple memoization for a factorial function
// function memoizedFactorial() {
//     const cache = {};
    
//     return function factorial(n) {
//       if (n in cache) {
//         console.log(`Fetching factorial(${n}) from cache`);
//         console.log(cache);
//         return cache[n];
//       }
      
//       console.log(`Calculating factorial(${n})`);
//       if (n === 0 || n === 1) {
//         cache[n] = 1;
//         return 1;
//       }
      
//       const result = n * factorial(n - 1);
//       cache[n] = result;
//       return result;
//     };
//   }
  
//   const factorial = memoizedFactorial();
  
//   console.log(factorial(5)); // Calculates and caches

//   console.log(factorial(100)); // Fetches from cache
//   console.log(factorial(4)); // Fetches from cache
//   console.log(factorial(3)); // Fetches from cache
//   console.log(factorial(2)); // Fetches from cache
//   console.log(factorial(1)); // Fetches from cache

// Example 2: Generic memoization function

function memoize(fn) {
    const cache = {};
    
    return function(...args) {
      const key = JSON.stringify(args);
      
      if (key in cache) {
        console.log(`Fetching result for ${key} from cache`);
        return cache[key];
      }
      
      console.log(`Calculating result for ${key}`);
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    };
  }
  
  // Using the generic memoize function
  const expensiveOperation = memoize((x, y) => {
    // Simulate an expensive operation
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += x * y;
    }
    return result;
  });
  
  console.time('First call');
  console.log(expensiveOperation(8, 9));
  console.timeEnd('First call');
  
  console.time('Second call');
  console.log(expensiveOperation(8, 9));
  console.timeEnd('Second call');