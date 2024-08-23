
const base58String = "FbbiXQcEzwSw8MSiNCmUHQ3DsZ93zFYhSuXua1RQ4WKg";

const bs58 = require('base58');

function base58ToUint8Array(base58String) {
  return bs58.decode(base58String);
}

// Example usage:
const base58 = base58String; // Use the previously encoded Base58 string
const byteArrayFromBase58 = base58ToUint8Array(base58);
console.log(byteArrayFromBase58);