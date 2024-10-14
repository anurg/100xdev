
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

fetch('https://dummyjson.com/products')
.then(res=>res.json())
.then((product)={
  
})

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then((product) = {
        
//     })

function sum(a)  {
    return function (b) {
        return function(c) {
            return function(d) {
                return a+b+c+d;
            }
        }
    }
}

console.log(sum(2) (3) (4) (5));
function sum1(a,b,c,d) {
    return a+b+c+d;
}
console.log(sum1.length);

