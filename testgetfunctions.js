var api = require('./api.js');

var user1Password = "user1";
var user1Salt     = "sdflkdsjflksdjlsdkcmlkdsmclkdsnfldka";
var user1Ipfs     = "hello";

var user2Password = "user2";
var user2Salt     = "sdflksdsjflksdjlsdkcmlkdsmclkdsnfldka";
var user2Ipfs     = "world";


var user1PrivateKey = api.getPrivateKey(user1Password, user1Salt);
var user1EthereumAddress = api.privateKeyToAddress(user1PrivateKey);

var user2PrivateKey = api.getPrivateKey(user2Password, user2Salt);
var user2EthereumAddress = api.privateKeyToAddress(user2PrivateKey);


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

