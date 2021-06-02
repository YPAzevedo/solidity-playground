const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const { Counter } = require("../artifacts/Counter");

const web3 = new Web3(ganache.provider());

let deployAccount, testAccount, contract;

const INITIAL_COUNT = 1;

beforeEach(async () => {
  [deployAccount, testAccount] = await web3.eth.getAccounts();

  contract = await new web3.eth.Contract(Counter.abi)
    .deploy({ data: Counter.evm.bytecode.object, arguments: [INITIAL_COUNT] })
    .send({ from: deployAccount, gas: "1000000" });
});

describe("Counter smart contract", () => {
  it("deploys counter contract with valid address", () => {
    assert.ok(contract.options.address);
  });

  it("counter contract has correct initial value", async () => {
    const count = await contract.methods.count().call();

    assert.strictEqual(Number(count), 1);
  });

  it("should increment counter", async () => {
    await contract.methods.increment().send({ from: testAccount });
    const count = await contract.methods.count().call();

    assert.strictEqual(Number(count), 2);
  });

  it("should decrement counter", async () => {
    await contract.methods.decrement().send({ from: testAccount });
    const count = await contract.methods.count().call();

    assert.strictEqual(Number(count), 0);
  });
});
