var api = require('./api.js');



// 1) get ride id
var rideId;
api.getNextRideId( function(err,result){
   console.log(err,result); 
   rideId = result;
});


// 2) pays contract
var rideCost = 1; // front end should calculate actual number
api.riderPaysContract(rideCost,function(err,result){
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



// 3) invite the ride
api.passangerRequestARide(rideCost,function(err,result){
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





