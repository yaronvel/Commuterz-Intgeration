var BigNumber = require('bignumber.js');
var common = require('./common.js'); 

////////////////////////////////////////////////////////////////////////////////

module.exports.register = function ( privateKey, ipfsLink, callback ) {
    var commuterzInstance = common.getCommuterzInstance();
    var txData = commuterzInstance.register.getData(ipfsLink);

    return common.signAndSend( privateKey, 
                               txData,
                               commuterzInstance.address,
                               0,
                               callback );
};

////////////////////////////////////////////////////////////////////////////////


module.exports.getUserBalance = function ( ethereumAddress, callback ) {
    var account = ethereumAddress;
    common.getTokenInstance(function(err,result){
        tokenInstance = result;
        if( err ) return callback(err, result);
        tokenInstance.balanceOf(account, function(err,result){
            callback(err,parseInt(result.toString(10)));
        });
    });
};

////////////////////////////////////////////////////////////////////////////////

module.exports.getUserIPFSLink = function ( ethereumAddress, callback ) {
    var account = ethereumAddress;
    var commuterzInstance = common.getCommuterzInstance();
        
    return commuterzInstance.getUserIPFSLink(account, function(err,result){
        callback(err,result);
    });
};

////////////////////////////////////////////////////////////////////////////////

module.exports.isRegistered = function ( ethereumAddress, callback ) {
    module.exports.getUserIPFSLink( ethereumAddress, function(err,result){
        if( err ) return callback(err,result);
        callback(err,result.toString() !== "" ); 
    });
};


////////////////////////////////////////////////////////////////////////////////

module.exports.approveTokensToContract = function ( privateKey, rideCost, callback ) {
    common.getTokenInstance(function(err,result){
        tokenInstance = result;
        if( err ) return callback(err, result);
        
        var txData = tokenInstance.approve.getData(common.getCommuterzAddress(), rideCost);

        return common.signAndSend( privateKey, 
                                   txData,
                                   tokenInstance.address,
                                   0,
                                   callback );
    });        
};


////////////////////////////////////////////////////////////////////////////////

module.exports.getNextRideId = function ( ethereumAddress, callback ) {
    var account = ethereumAddress;
    common.getCommuterzInstance().getRideId(account, callback );    
};

////////////////////////////////////////////////////////////////////////////////

module.exports.userRequestARide = function (privateKey, rideCost, callback ) {
    var txData = common.getCommuterzInstance().passangerRideRequest.getData(rideCost );
    return common.signAndSend( privateKey, 
                               txData,
                               common.getCommuterzInstance().address,
                               0,
                               callback );        
};
 
////////////////////////////////////////////////////////////////////////////////

module.exports.txStatus = function ( txhash, callback ) {
    var web3 = common.getWeb3();
    web3.eth.getTransactionReceipt(txhash, function(err,result){
       if( err ) return callback(err,false);
       if( result === null ) return callback(err,false);
       // else
       if( parseInt(result.gasUsed.toString(10)) >= common.getGasLimit() ) {
           return callback( "tx failed", true );
       }
       else {
           return callback( err, true );           
       }
    });
};


////////////////////////////////////////////////////////////////////////////////

module.exports.userApproveARideByDriver = function (privateKey, rideId, callback ) {
    var txData = common.getCommuterzInstance().driverAcceptRequest.getData(rideId);
    return common.signAndSend( privateKey, 
                               txData,
                               common.getCommuterzInstance().address,
                               0,
                               callback );        
        
};

////////////////////////////////////////////////////////////////////////////////

module.exports.userEndsRideByDriver = function (privateKey, rideId, callback ) {
    var txData = common.getCommuterzInstance().endRide.getData(rideId);
    return common.signAndSend( privateKey, 
                               txData,
                               common.getCommuterzInstance().address,
                               0,
                               callback );        
        
};

////////////////////////////////////////////////////////////////////////////////

module.exports.userRate = function (privateKey, rideId, rating, callback ) {
    var txData = common.getCommuterzInstance().rate.getData(rideId,rating);
    return common.signAndSend( privateKey, 
                               txData,
                               common.getCommuterzInstance().address,
                               0,
                               callback );
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
    console.log(common.privateKeyToAddress(key));
    return common.signAndSend( key, 
                               "",
                               destAccount,
                               new BigNumber(10).pow(17), // 1/2 ether
                               callback );
      
};

////////////////////////////////////////////////////////////////////////////////
