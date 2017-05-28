var api = require('./api.js');
/*

////////////////////////////////////////////////////////////////////////////////

var rideCost = 1000;
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

api.driverPaysContract(rideCost,function(err,result){
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



var ipfs = "hello world";
api.passangerRegister(ipfs,function(err,result){
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
api.driverRegister(ipfs,function(err,result){
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


*/
/*
api.register( account, privateKey, "hello world", function(err,result){
    console.log(err,result);    
});*/



/*

var rideCost = 1000;
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

api.driverPaysContract(rideCost,function(err,result){
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

*/

/*
api.getDriverBalance(function(err,result){
   console.log(err,result);    
});

api.driverPaysContract(10,function(err,result){
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


var rideId = "0x1f1252f8e497755cb1bfbae3996c9a0b734cf2f2d895354bd8971d9d69d9bda2";



api.driverApproveARide(rideId,function(err,result){
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

api.driverEndsRide(rideId,function(err,result){
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


/*
api.getRiderBalance(function(err,result){
   console.log(err,result);    
});*/


/*

api.txStatus('0x31b04a7aca793c699c3ae5b1dfe6dfc8ad96dc13fa78748043881f437235bd3f',function(err,result){
    console.log(err,result);
});



api.passangerRequestARide(39,function(err,result){
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



api.getNextRideId( function(err,result){
   console.log(err,result); 
   var id = result;
});


api.riderPaysContract(39,function(err,result){
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

/*
/*
api.getRiderBalance(function(err,result){
   console.log(err,result);    
});


api.getRiderIPFSLink(function(err,result){
   console.log(err,result);    
});*/



