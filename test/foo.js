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
