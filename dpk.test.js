const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("It should accept string and return the hashed string of length 128.", () => {
    const trivialKey = deterministicPartitionKey("abcd");
    expect(trivialKey).toHaveLength(128);
  });

  it("It should accept partionKey and return the value of the partionKey", () => {
    const data = { partitionKey: "123456" };
    const trivialKey = deterministicPartitionKey(data);
    expect(trivialKey).toBe(data.partitionKey);
  });
});
