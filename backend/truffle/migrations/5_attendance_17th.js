const AttendanceV3 = artifacts.require("AttendanceV3");

module.exports = function(deployer) {
deployer.deploy(AttendanceV3);
};	

//  let instance= await AttendanceV3.deployed()
// let accounts= await web3.eth.getAccounts()

