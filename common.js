var BigNumber = require('bignumber.js');
var Tx = require('ethereumjs-tx');
var Web3 = require('web3');
// create an instance of web3 using the HTTP provider.
// NOTE in mist web3 is already available, so check first if its available before instantiating
url = "http://52.170.217.85:8545/jsonrpc";

//url = "https://mainnet.infura.io:8545" 
var web3 = new Web3(new Web3.providers.HttpProvider(url));


var commuterzAddress = "0x95b03f4d2398875251fb10cd0f94095c207d01d5";
var commuterzABI = [{"constant":true,"inputs":[],"name":"numUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"rideId","type":"bytes32"},{"name":"rating","type":"uint256"}],"name":"rate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getUserNumDisputes","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"rideId","type":"bytes32"},{"name":"riderIsRight","type":"bool"}],"name":"resolveDispute","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"rideCost","type":"uint256"}],"name":"passangerRideRequest","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"doLottery","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getUserNumRides","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"maxNumUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"rideId","type":"bytes32"}],"name":"endRide","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getUserNumRatedRides","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"rideId","type":"bytes32"}],"name":"dispute","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getRideId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"rideId","type":"bytes32"}],"name":"driverAcceptRequest","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"lottery","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getUserReputation","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getUserIPFSLink","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"userData","type":"string"}],"name":"register","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"IPFSLink","type":"string"}],"name":"Register","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"rider","type":"address"},{"indexed":false,"name":"rideId","type":"bytes32"},{"indexed":false,"name":"cost","type":"uint256"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"PassangerRideRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"driver","type":"address"},{"indexed":false,"name":"rideId","type":"bytes32"}],"name":"DriverAcceptRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"withDispute","type":"bool"}],"name":"UpdateNumRides","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"rideId","type":"bytes32"}],"name":"Dispute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"rideId","type":"bytes32"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"EndRide","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"rideId","type":"bytes32"},{"indexed":false,"name":"rating","type":"uint256"}],"name":"Rate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"rideId","type":"bytes32"},{"indexed":false,"name":"riderIsRight","type":"bool"}],"name":"ResolveDispute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"lottery","type":"address"},{"indexed":false,"name":"time","type":"uint256"}],"name":"CreateNewLottery","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"winner","type":"address"},{"indexed":false,"name":"lottery","type":"address"},{"indexed":false,"name":"time","type":"uint256"}],"name":"DoLottery","type":"event"}];


var commuterzClass = web3.eth.contract(commuterzABI);
var commuterzInstance = commuterzClass.at(commuterzAddress);

var tokenABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
var tokenClass = web3.eth.contract(tokenABI);
 
 
var lotteryABI = [{"constant":true,"inputs":[],"name":"totalAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"amount","type":"uint256"}],"name":"addTicket","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"seed","type":"uint256"}],"name":"chooseWinner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"collectPrize","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"theWinner","type":"address"}],"name":"setWinner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"winner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_token","type":"address"}],"payable":false,"type":"constructor"}];
var lotteryClass = web3.eth.contract(lotteryABI);






var rider = '0x0fb374a56616bec8b8cb5a45bcd49e8e16b1abfb';
var driver = '0x46276c64ff2fba799f57b9b8af6c9d73c0273698';


var currentRideId = "0xdead";

////////////////////////////////////////////////////////////////////////////////

module.exports.getCommuterzInstance = function ( ) {
    return commuterzInstance;
};

module.exports.getTokenInstance = function ( callback ) {
    commuterzInstance.token(function(err,result){
        var tokenAddress = result;
        callback(err, tokenClass.at(tokenAddress));    
    });
};

module.exports.getLotteryInstance = function ( ) {
    var lotteryAddress = commuterzInstance.lottery();
    return tokenClass.at(lotteryAddress);
};

module.exports.getLotteryAddress = function ( ) {
    return commuterzInstance.lottery();
};


////////////////////////////////////////////////////////////////////////////////

module.exports.getRiderAddress = function ( ) {
    return rider;
};

////////////////////////////////////////////////////////////////////////////////

module.exports.getDriverAddress = function ( ) {
    return driver;
};

////////////////////////////////////////////////////////////////////////////////

module.exports.getWeb3 = function ( ) {
    return web3;
};

////////////////////////////////////////////////////////////////////////////////

module.exports.getRideCost = function ( ) {
    return 10;
};

////////////////////////////////////////////////////////////////////////////////

module.exports.getCurrentRideId = function ( ) {
    return "0xdd328abd00b78eba32f7f3f57208502d42eae97dd80695de8ec20a67ba3d7897";
};


////////////////////////////////////////////////////////////////////////////////

module.exports.getRiderAccount = function ( ) {
    return rider;
};

////////////////////////////////////////////////////////////////////////////////

module.exports.getDriverAccount = function ( ) {
    return driver;
};


