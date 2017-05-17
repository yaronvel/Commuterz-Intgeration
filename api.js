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
    //var tokenInstance = common.getTokenInstance();
    //return parseInt(tokenInstance.balanceOf(account).toString(10));
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

module.exports.getLotteryBalance = function ( ) {
    var account = common.getLotteryAddress();
    var tokenInstance = common.getTokenInstance();
    
    return parseInt(tokenInstance.balanceOf(account).toString(10));
};
