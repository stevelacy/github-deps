module.exports = function(name, deps, cb){
  object = {
    name: name,
    deps: {}
  };

  Object.keys(deps).forEach(function(name){

    try {

      var required = deps[name].required.replace('^', '');
      required = required.replace('~', '');

      if (required < deps[name].stable){
        object.deps[name] = {
          update: deps[name].stable,
          current: deps[name].required
        };
      }
    }
    catch(e) {
      return cb(err);
    }
  });
  return cb(null, object);
};
