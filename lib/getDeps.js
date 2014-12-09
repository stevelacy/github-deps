var david = require('david');
var rawgithub = require('rawgithub');


var parseDeps = require('./parse');

module.exports = function(url, opts, cb){
  opts = opts || {};
  rawgithub(url, opts, function(err, data){
    if (err) return cb(err);

    var json;
    try {
      json = JSON.parse(data);
      if (json.name == 'undefined'){
        return cb(new Error('invalid npm package'));
      }
    }
    catch (e){
      return cb(e);
    }

    david.getUpdatedDependencies(json, function(err, deps){
      if (err) return cb(err, deps);
      parseDeps(json.name, deps, function(err, obj){
        return cb(null, obj);
      });
    });
  });

};
