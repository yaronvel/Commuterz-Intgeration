var common = require('./common.js'); 

////////////////////////////////////////////////////////////////////////////////

module.exports.getRiderBalance = function ( callback ) {
    var account = common.getRiderAccount();
    common.getTokenInstance(function(err,result){
        tokenInstance = result;
        if( err ) return callback(err, result);
        tokenInstance.balanceOf(account, function(err,result){
            callback(err,parseInt(result.toString(10)));
        });
    });
};

////////////////////////////////////////////////////////////////////////////////

module.exports.getRiderIPFSLink = function ( callback ) {
    var account = common.getRiderAccount();
    var commuterzInstance = common.getCommuterzInstance();
        
    return commuterzInstance.getUserIPFSLink(account, function(err,result){
        callback(err,result);
    });
};

////////////////////////////////////////////////////////////////////////////////

module.exports.riderPaysContract = function ( rideCost, callback ) {
    var account = common.getRiderAccount();

    var account = common.getRiderAccount();
    common.getTokenInstance(function(err,result){
        tokenInstance = result;
        if( err ) return callback(err, result);
        tokenInstance.approve(common.getCommuterzAddress(), rideCost,{from:account,gas:500000}, function(err,result){
            if( err ) return callback(err,result);
            callback(err,result);
        });
    });        
};


////////////////////////////////////////////////////////////////////////////////

module.exports.getNextRideId = function ( callback ) {
    var account = common.getRiderAccount();
    common.getCommuterzInstance().getRideId(account, callback );    
};

////////////////////////////////////////////////////////////////////////////////

module.exports.passangerRequestARide = function (rideCost, callback ) {
    var account = common.getRiderAccount();
    common.getCommuterzInstance().passangerRideRequest(rideCost, {from:account,gas:500000}, callback );    
};
 
//////////////////////////////////////////////////////////////////////////////// 
 
 

////////////////////////////////////////////////////////////////////////////////

module.exports.txStatus = function ( txhash, callback ) {
    var web3 = common.getWeb3();
    web3.eth.getTransactionReceipt(txhash, function(err,result){
       if( err ) return callback(err,false);
       callback(err,result !== null ); 
    });
};


////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

module.exports.getDriverIPFSLink = function ( callback ) {
    var account = common.getDriverAccount();
    var commuterzInstance = common.getCommuterzInstance();
        
    return commuterzInstance.getUserIPFSLink(account, function(err,result){
        callback(err,result);
    });
};

////////////////////////////////////////////////////////////////////////////////

module.exports.driverPaysContract = function ( rideCost, callback ) {
    var account = common.getDriverAccount();
    common.getTokenInstance(function(err,result){
        tokenInstance = result;
        if( err ) return callback(err, result);
        tokenInstance.approve(common.getCommuterzAddress(), rideCost,{from:account,gas:500000}, function(err,result){
            if( err ) return callback(err,result);
            callback(err,result);
        });
    });        
};
////////////////////////////////////////////////////////////////////////////////

module.exports.getDriverBalance = function ( callback ) {
    var account = common.getDriverAccount();
    common.getTokenInstance(function(err,result){
        tokenInstance = result;
        if( err ) return callback(err, result);
        tokenInstance.balanceOf(account, function(err,result){
            callback(err,parseInt(result.toString(10)));
        });
    });
};

////////////////////////////////////////////////////////////////////////////////

module.exports.driverApproveARide = function (rideId, callback ) {
    var account = common.getDriverAccount();
    common.getCommuterzInstance().driverAcceptRequest(rideId, {from:account,gas:500000}, callback );    
};

////////////////////////////////////////////////////////////////////////////////