const AttendanceV4 = artifacts.require("AttendanceV4");

module.exports = function(deployer) {
deployer.deploy(AttendanceV4);
};	

//  let instance= await AttendanceV3.deployed()
// let accounts= await web3.eth.getAccounts()

