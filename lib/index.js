
getDeps = require('./getDeps');


module.exports = function(url, opts, cb){
  opts = opts || {};
  if (url instanceof Array){
    arr = [];

    url.forEach(function(v, k){
      getDeps(v, opts, function(err, data){
        if (err) return cb(err);
        arr.push(data);

        if (k == url.length-1){
          return cb(null, arr);
        }
      });
    });
  }

  if (typeof url === 'string'){
    getDeps(url, opts, function(err, data){
      return cb(err, data);
    });
  }
};
