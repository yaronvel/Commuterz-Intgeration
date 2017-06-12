var BigNumber = require('bignumber.js');
//var EthereumTx = require('ethereumjs-tx');
const ethjsaccount = require('ethjs-account');
const signer = require('ethjs-signer')
var Web3 = require('web3');
// create an instance of web3 using the HTTP provider.
// NOTE in mist web3 is already available, so check first if its available before instantiating
url = "http://52.170.217.85:8545/jsonrpc";
url = "https://kovan.infura.io/"
//url = "https://mainnet.infura.io:8545" 
var web3 = new Web3(new Web3.providers.HttpProvider(url));


var commuterzAddress = "0x74a219b01f1a971cf07ea2cdd3722589d413578c";
var commuterzABI = [{"constant":true,"inputs":[],"name":"numUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"rideId","type":"bytes32"},{"name":"rating","type":"uint256"}],"name":"rate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getUserNumDisputes","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"rideId","type":"bytes32"},{"name":"riderIsRight","type":"bool"}],"name":"resolveDispute","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"rideCost","type":"uint256"}],"name":"passangerRideRequest","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"doGame","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getUserNumRides","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"maxNumUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"rideId","type":"bytes32"}],"name":"endRide","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getUserNumRatedRides","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"rideId","type":"bytes32"}],"name":"dispute","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getRideId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"rideId","type":"bytes32"}],"name":"driverAcceptRequest","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getUserReputation","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"game","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getUserIPFSLink","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"userData","type":"string"}],"name":"register","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"IPFSLink","type":"string"}],"name":"Register","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"rider","type":"address"},{"indexed":false,"name":"rideId","type":"bytes32"},{"indexed":false,"name":"cost","type":"uint256"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"PassangerRideRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"driver","type":"address"},{"indexed":false,"name":"rideId","type":"bytes32"}],"name":"DriverAcceptRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"withDispute","type":"bool"}],"name":"UpdateNumRides","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"rideId","type":"bytes32"}],"name":"Dispute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"rideId","type":"bytes32"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"EndRide","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"rideId","type":"bytes32"},{"indexed":false,"name":"rating","type":"uint256"}],"name":"Rate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"rideId","type":"bytes32"},{"indexed":false,"name":"riderIsRight","type":"bool"}],"name":"ResolveDispute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"game","type":"address"},{"indexed":false,"name":"time","type":"uint256"}],"name":"CreateNewGame","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"winner","type":"address"},{"indexed":false,"name":"game","type":"address"},{"indexed":false,"name":"time","type":"uint256"}],"name":"DoGame","type":"event"}];


var commuterzClass = web3.eth.contract(commuterzABI);
var commuterzInstance = commuterzClass.at(commuterzAddress);

var tokenABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
var tokenClass = web3.eth.contract(tokenABI);
 
 
var gameABI = [{"constant":true,"inputs":[],"name":"totalAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"amount","type":"uint256"}],"name":"addTicket","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"seed","type":"uint256"}],"name":"chooseWinner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"collectPrize","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"theWinner","type":"address"}],"name":"setWinner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"winner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_token","type":"address"}],"payable":false,"type":"constructor"}];
var gameClass = web3.eth.contract(gameABI);

var gasLimit = new BigNumber(500000);



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

module.exports.getCommuterzAddress = function ( ) {
    return new BigNumber(commuterzAddress);
};


////////////////////////////////////////////////////////////////////////////////

module.exports.getWeb3 = function ( ) {
    return web3;
};

////////////////////////////////////////////////////////////////////////////////

module.exports.getGasLimit = function ( ) {
    return parseInt(gasLimit.toString(10));
};


////////////////////////////////////////////////////////////////////////////////

module.exports.signAndSend = function ( userPrivateKey, 
                                        txData,
                                        destenationAddress,
                                        value,
                                        callback ) {
    var userAccount = module.exports.privateKeyToAddress(userPrivateKey);
    web3.eth.getTransactionCount(userAccount,
                                 function(err,result){
        if( err ) return callback(err, result);
        var txParams = {
            nonce: "0x" + result.toString(16),
            gasPrice: new BigNumber("0x4A817C800"),
            gasLimit: gasLimit,
            to: destenationAddress,
            value: "0x" + value.toString(16),
            data: txData,
            //chainId: 3         
        };
        
        var raw = signer.sign(txParams, userPrivateKey);
        web3.eth.sendRawTransaction(raw, callback);
                                            
    });    
};

////////////////////////////////////////////////////////////////////////////////

module.exports.privateKeyToAddress = function( privateKey ) {
    return ethjsaccount.privateToAccount(privateKey).address; 
};

////////////////////////////////////////////////////////////////////////////////

module.exports.getPrivateKey = function( password, salt ) {
    var key = web3.sha3(password + salt);
    return key;
};


////////////////////////////////////////////////////////////////////////////////

module.exports.getGameInstance = function ( callback ) {
    commuterzInstance.game(function(err,result){
        var gameAddress = result;
        callback(err, gameClass.at(gameAddress));    
    });
};

