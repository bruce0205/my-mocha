var assert = require('assert');
var expect = require('chai').expect;

var foo = 'bar';
describe('Foo', () => {
    describe('#expect', () => {
        it('expect a string', () => {
            expect(foo).to.be.a('string');
        });
    });
});

describe('a suite of tests', function () {
    this.timeout(500);

    it('should take less than 500ms', function (done) {
        setTimeout(done, 300);
    });

    it('should take less than 500ms as well', function (done) {
        setTimeout(done, 250);
    });
})