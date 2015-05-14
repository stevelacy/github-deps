var depss = require('../');
var should = require('should');

describe('deps', function(){
  it('should get json from URL', function(done){
    depss('https://github.com/stevelacy/github-deps/blob/master/test/fixtures/pkg.json', {}, function(err, data){
      should(err).equal(null);
      should.exist(data);
      should(data).be.type('object');
      should(data.deps.mocha.update).be.greaterThan('1.1.1');
      should(data.deps.mocha.current).match(/1.1.0/);
      done();
    });
  });

  it('should get json from Array of URLs', function(done){
    var urls = ['https://github.com/stevelacy/github-deps/blob/master/test/fixtures/pkg.json'];

    depss(urls, {}, function(err, data){
      should(err).equal(null);
      should.exist(data);
      should(data).be.type('object');
      should.exist(data[0].deps.mocha);
      should.exist(data[0].deps.mocha.update);
      should(data[0].deps.mocha.update).be.greaterThan('1.1.1');
      should(data[0].deps.mocha.current).match(/1.1.0/);
      done();
    });
  });
});
