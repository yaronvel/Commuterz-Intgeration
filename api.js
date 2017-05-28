var BigNumber = require('bignumber.js');
var common = require('./common.js'); 

////////////////////////////////////////////////////////////////////////////////

module.exports.register = function ( privateKey, ipfsLink, callback ) {
    var contractAddress = common.getCommuterzAddress();
    var commuterzInstance = common.getCommuterzInstance();
    var txData = commuterzInstance.register.getData(ipfsLink);

    return common.signAndSend( privateKey, 
                               txData,
                               "0x" + contractAddress.toString(16),
                               0,
                               callback );
};

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

////////////////////////////////////////////////////////////////////////////////

module.exports.driverEndsRide = function (rideId, callback ) {
    var account = common.getDriverAccount();
    common.getCommuterzInstance().endRide(rideId, {from:account,gas:500000}, callback );    
};


////////////////////////////////////////////////////////////////////////////////

module.exports.privateKeyToAddress = function( privateKey ) {
        return common.privateKeyToAddress(privateKey);    
};

////////////////////////////////////////////////////////////////////////////////

module.exports.getPrivateKey = function( password, salt ) {
    return common.getPrivateKey(password,salt);  
};

////////////////////////////////////////////////////////////////////////////////

module.exports.getSomeEtherInRegistration = function( destAccount, callback ) {
    var key = common.getPrivateKey("commuterz","");

    return common.signAndSend( key, 
                               "",
                               destAccount,
                               new BigNumber(10).pow(17), // 1/2 ether
                               callback );
      
};

////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////

module.exports.passangerRegister = function (ipfsLink, callback ) {
    var account = common.getRiderAccount();
    common.getCommuterzInstance().register(ipfsLink, {from:account,gas:500000}, callback );    
};

////////////////////////////////////////////////////////////////////////////////

module.exports.driverRegister = function (ipfsLink, callback ) {
    var account = common.getDriverAccount();
    common.getCommuterzInstance().register(ipfsLink, {from:account,gas:500000}, callback );    
};
