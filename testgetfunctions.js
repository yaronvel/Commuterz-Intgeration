var api = require('./api.js');

var user1Password = "user1";
var user1Salt     = "sdflkdsjflksdjlsdkcmlkdsmclkdsnfldka";
var user1Ipfs     = "hello";

var user2Password = "user2";
var user2Salt     = "sdflksdsjflksdjlsdkcmlkdsmclkdsnfldka";
var user2Ipfs     = "world";

var user3Password = "user3";
var user3Salt     = "sdflksdsjflksdjlsdkcmlkdsmclkdsnfldk3";
var user3Ipfs     = "world!";


var user1PrivateKey = api.getPrivateKey(user1Password, user1Salt);
var user1EthereumAddress = api.privateKeyToAddress(user1PrivateKey);

var user2PrivateKey = api.getPrivateKey(user2Password, user2Salt);
var user2EthereumAddress = api.privateKeyToAddress(user2PrivateKey);


var user3PrivateKey = api.getPrivateKey(user3Password, user3Salt);
var user3EthereumAddress = api.privateKeyToAddress(user3PrivateKey);


api.getNumUsers(function(err,result){
    if( err ) console.log(err);
    else {
        console.log( "number of users = " + result);
    }
});


/*

api.isRegistered( user3EthereumAddress, function(err,result){
    if( err ) console.log(err);
    else {
        console.log( "user 3 registered = " + result);
    }
});

api.isRegistered( user2EthereumAddress, function(err,result){
    if( err ) console.log(err);
    else {
        console.log( "user 2 registered = " + result);
    }
});



api.getUserBalance(user1EthereumAddress, function(err,result){
    if( err ) console.log(err);
    else console.log("user1 balance is " + result.toString(10)); 
});

api.getUserIPFSLink(user1EthereumAddress, function(err,result){
    if( err ) console.log(err);
    else console.log("user1 ipfs is " + result); 
});

api.getUserBalance(user2EthereumAddress, function(err,result){
    if( err ) console.log(err);
    else console.log("user2 balance is " + result.toString(10)); 
});

api.getUserIPFSLink(user2EthereumAddress, function(err,result){
    if( err ) console.log(err);
    else console.log("user2 ipfs is " + result); 
});

api.getGameBalance(function(err,result){
    if( err ) console.log(err);
    else console.log("game balance is " + result.toString(10)); 
});




var rideId;

var BigNumber = require('bignumber.js');
api.getNextRideId(user1EthereumAddress, function(err,result){
    if( err ) console.log(err);
    else {
        rideId = result;
        num = new BigNumber(result);
        console.log("ride id: " + rideId.toString(16));
        console.log("ride id: " + result);        
    } 
});
*/