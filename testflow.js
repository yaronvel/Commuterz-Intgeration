var api = require('./api.js');

var user1Password = "user1";
var user1Salt     = "0x2e60fa334035743f8bf559cbf01329ce4cbc97f9fb0d783c0f09f98ca552234a";
var user1Ipfs     = "hello";

var user2Password = "user2";
var user2Salt     = "0x2e60fa334035743f8bf559cbf01329ce4cbc97f9fb0d783c0f09f98ca552234a";
var user2Ipfs     = "world";


var user1PrivateKey = api.getPrivateKey(user1Password, user1Salt);
var user1EthereumAddress = api.privateKeyToAddress(user1PrivateKey);

var user2PrivateKey = api.getPrivateKey(user2Password, user2Salt);
var user2EthereumAddress = api.privateKeyToAddress(user2PrivateKey);

////////////////////////////////////////////////////////////////////////////////
// registration - user 1

api.getSomeEtherInRegistration( user1EthereumAddress, function(err,result){
    if( err ) console.log(err);
    else {
        tx = result;
        console.log(tx);
        api.txStatus( tx, function(err,result){
           if( err ) console.log(err);
           tx_confirmed = result;
           if( tx_confirmed ) {
               console.log("confirmed")
           }
           else {
               console.log("not confirmed");
           }
        });
    }
});


api.register( user1PrivateKey, user1Ipfs, function(err,result){
    if( err ) console.log(err);
    else {
        tx = result;
        console.log(tx);
        api.txStatus( tx, function(err,result){
           if( err ) console.log(err);
           tx_confirmed = result;
           if( tx_confirmed ) {
               console.log("confirmed")
           }
           else {
               console.log("not confirmed");
           }
        });
    }
});


api.approveTokensToContract( user1PrivateKey, 1000000, function(err,result){
    if( err ) console.log(err);
    else {
        tx = result;
        console.log(tx);
        api.txStatus( tx, function(err,result){
           if( err ) console.log(err);
           tx_confirmed = result;
           if( tx_confirmed ) {
               console.log("confirmed")
           }
           else {
               console.log("not confirmed");
           }
        });
    }
});


// registration - user 2
api.getSomeEtherInRegistration( user2EthereumAddress, function(err,result){
    if( err ) console.log(err);
    else {
        tx = result;
        console.log(tx);
        api.txStatus( tx, function(err,result){
           if( err ) console.log(err);
           tx_confirmed = result;
           if( tx_confirmed ) {
               console.log("confirmed")
           }
           else {
               console.log("not confirmed");
           }
        });
    }
});


api.register( user2PrivateKey, user2Ipfs, function(err,result){
    if( err ) console.log(err);
    else {
        tx = result;
        console.log(tx);
        api.txStatus( tx, function(err,result){
           if( err ) console.log(err);
           tx_confirmed = result;
           if( tx_confirmed ) {
               console.log("confirmed")
           }
           else {
               console.log("not confirmed");
           }
        });
    }
});


api.approveTokensToContract( user2PrivateKey, 1000000, function(err,result){
    if( err ) console.log(err);
    else {
        tx = result;
        console.log(tx);
        api.txStatus( tx, function(err,result){
           if( err ) console.log(err);
           tx_confirmed = result;
           if( tx_confirmed ) {
               console.log("confirmed")
           }
           else {
               console.log("not confirmed");
           }
        });
    }
});


////////////////////////////////////////////////////////////////////////////////

// user 1 request a ride
var rideId ='0x1fb8c8c5cb615af7dfdc20fa101f192d951ab84969f13a104b3b70d7450b4a74';
var rideCost = 1;

api.getNextRideId(user1EthereumAddress, function(err,result){
    if( err ) console.log(err);
    else {
        rideId = result;
        console.log("ride id: " + rideId.toString(16));
    } 
});


api.userRequestARide( user1PrivateKey, rideCost, function(err,result){
    if( err ) console.log(err);
    else {
        tx = result;
        console.log(tx);
        api.txStatus( tx, function(err,result){
           if( err ) console.log(err);
           tx_confirmed = result;
           if( tx_confirmed ) {
               console.log("confirmed")
           }
           else {
               console.log("not confirmed");
           }
        });
    }
});


// user 2 approve the ride
api.userApproveARideByDriver( user2PrivateKey, rideId, function(err,result){
    if( err ) console.log(err);
    else {
        tx = result;
        console.log(tx);
        api.txStatus( tx, function(err,result){
           if( err ) console.log(err);
           tx_confirmed = result;
           if( tx_confirmed ) {
               console.log("confirmed")
           }
           else {
               console.log("not confirmed");
           }
        });
    }
});


// user 2 report succesful end of the ride
api.userEndsRideByDriver( user2PrivateKey, rideId, function(err,result){
    if( err ) console.log(err);
    else {
        tx = result;
        console.log(tx);
        api.txStatus( tx, function(err,result){
           if( err ) console.log(err);
           tx_confirmed = result;
           if( tx_confirmed ) {
               console.log("confirmed")
           }
           else {
               console.log("not confirmed");
           }
        });
    }
});


////////////////////////////////////////////////////////////////////////////////

// users rate drive
var user1Rating = 4;
api.userRate( user1PrivateKey, rideId, user1Rating, function(err,result){
    if( err ) console.log(err);
    else {
        tx = result;
        console.log(tx);
        api.txStatus( tx, function(err,result){
           if( err ) console.log(err);
           tx_confirmed = result;
           if( tx_confirmed ) {
               console.log("confirmed")
           }
           else {
               console.log("not confirmed");
           }
        });
    }
});

var user2Rating = 5;
api.userRate( user2PrivateKey, rideId, user2Rating, function(err,result){
    if( err ) console.log(err);
    else {
        tx = result;
        console.log(tx);
        api.txStatus( tx, function(err,result){
           if( err ) console.log(err);
           tx_confirmed = result;
           if( tx_confirmed ) {
               console.log("confirmed")
           }
           else {
               console.log("not confirmed");
           }
        });
    }
});

