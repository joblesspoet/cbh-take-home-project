const { deterministicPartitionKey } = require("./dpk");

console.log(deterministicPartitionKey({ partitionKey: 123456 }));
// console.log(
//   deterministicPartitionKey(
//     "abcdmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmkkkkkkkkkkkkkiiiiiiiii"
//   )
// );
