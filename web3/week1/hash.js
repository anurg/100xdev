const crypto = require("crypto");
// const input = "100xdevs";
// const hash = crypto.createHash('sha256').update(input).digest('hex');
// console.info(hash);

function findHashWithPrefix(prefix) {
    let input = 0;
    let count = 0;
    let inputStr;
    let arr = [];
    let result ;
    while (true) {
        inputStr = `harkirat => Raman | Rs 100
                    Ram => Ankit | Rs 10` + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            count++
            result = {inputStr : inputStr , hash : hash};
            arr.push(result)
            if (count === 2) {
                return arr;
            }
            
        }
        input++;
    }
    
}

const result = findHashWithPrefix("00000");
// console.log(result)
for(i=0; i< result.length;i++) {
    console.log(` The Results : ${i} `);
    console.log(`Input String: ${result[i].inputStr}`);
    console.log(`Hash : ${result[i].hash}`)
}

