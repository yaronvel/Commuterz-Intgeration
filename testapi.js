var api = require('./api.js');


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
api.getRiderBalance(function(err,result){
   console.log(err,result);    
});


api.getRiderIPFSLink(function(err,result){
   console.log(err,result);    
});*/