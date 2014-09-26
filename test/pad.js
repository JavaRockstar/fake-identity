var pad = require('../src/pad');

describe('pad()', function() {
  'use strict';

  it('pads strings and numbers with zeroes by default', function() {
    pad(1, 3).should.equal('001');
    pad('a', 3).should.equal('00a');
  });

  it(
    'accepts a parameter to override zero as the padding character',
    function() {
      pad(1, 3, '-').should.equal('--1');
    }
  );

  it('only accepts integers as the second argument', function() {
    pad.bind(pad, 1, 'a').should.throw(Error);
    pad.bind(pad, 1).should.throw(Error);
  });
});
