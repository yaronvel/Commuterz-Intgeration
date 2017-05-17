var api = require('./api.js');

api.getRiderBalance(function(err,result){
   console.log(err,result);    
});


api.getRiderIPFSLink(function(err,result){
   console.log(err,result);    
});