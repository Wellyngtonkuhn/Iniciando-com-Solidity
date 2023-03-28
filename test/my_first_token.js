const MyFirstToken = artifacts.require("MyFirstToken");

contract("MyFirstToken", function ([owner, marketing]) {
  const COIN_NAME = "MyFirstToken";
  const COIN_SYMBOL = "MFT";
  const TOTAL_SUPPLY = web3.utils.toWei("2000");
  var contractIstance;

  beforeEach(async () => {
    contractIstance = await MyFirstToken.deployed();
  });

  describe("Validate MyFirstToken", async () => {
    it("should have a total supplay = 2.000", async () => {
      const supply = (await contractIstance.totalSupply()).toString();
      assert.equal(supply, TOTAL_SUPPLY.toString());
    });

    it("should have a name = MyFirstToken", async () => {
      const tokenName = await contractIstance.name();
      assert.equal(tokenName, COIN_NAME);
    });

    it("should have a symbol = MFT", async () => {
      const tokenSymbol = await contractIstance.symbol();
      assert.equal(tokenSymbol, COIN_SYMBOL);
    });

    it("owner should have 1.000 token", async () => {
      const balance = await contractIstance.balanceOf(owner);
      const balanceWei = web3.utils.fromWei(balance);
      assert.equal(balanceWei, "1000");
    });

    it("marketing should have 1.000 token", async () => {
      const balance = await contractIstance.balanceOf(marketing);
      const balanceWei = web3.utils.fromWei(balance);
      assert.equal(balanceWei, "1000");
    });
  });
});
