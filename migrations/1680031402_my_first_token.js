const MyFirstToken = artifacts.require("MyFirstToken")

module.exports = async function(_deployer) {
  // Use deployer to state migration tasks.
  await _deployer.deploy(MyFirstToken)
};
