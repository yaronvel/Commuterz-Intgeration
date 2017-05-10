var common = require('./common.js'); 

////////////////////////////////////////////////////////////////////////////////

module.exports.getRiderBalance = function ( ) {
    var account = common.getRiderAccount();
    var tokenInstance = common.getTokenInstance();
    return parseInt(tokenInstance.balanceOf(account).toString(10));
};

////////////////////////////////////////////////////////////////////////////////

module.exports.getRiderIPFSLink = function ( ) {
    var account = common.getRiderAccount();
    var commuterzInstance = common.getCommuterzInstance();
        
    return common.getWeb3().toAscii(commuterzInstance.getUserIPFSLink(account).toString(16));
};

////////////////////////////////////////////////////////////////////////////////

module.exports.getLotteryBalance = function ( ) {
    var account = common.getLotteryAddress();
    var tokenInstance = common.getTokenInstance();
    
    return parseInt(tokenInstance.balanceOf(account).toString(10));
};
