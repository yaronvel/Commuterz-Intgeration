var api = require('./api.js');



// 1) decide on private key - get password from user. salt from random
var password = "hello world";
// IMPORTANT!!! salt must be a unique random string
var salt     = "q2weewfsdf243rreffe2wr423r3ewfer3wwwwwwwwwwwwdss";  

var privateKey = api.getPrivateKey(password, salt);
var ipfs = "link"; // get ipfs link from user

// 2) get some ether
api.getSomeEtherInRegistration( api.privateKeyToAddress(privateKey), function(err,result){
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

// 3) get register
api.register( privateKey, ipfs, function(err,result){
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

