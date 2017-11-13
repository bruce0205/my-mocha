var assert = require('assert');
var expect = require('chai').expect;



describe('Array', () =>{
	describe('#indexOf()', ()=>{
		it('should return -1 when the value is not present', () =>{
			assert.equal(-1, [1,2,3].indexOf(0));	
		});
	});
	describe('#length()', ()=>{
		it('should return 3 when has three element', () => {
			assert.equal(3, [1,2,3].length);
		});
	});
});

var foo = 'bar';
describe('Foo', () =>{
	describe('#expect', ()=>{
		if('expect a string', ()=>{
			expect(foo).to.be.a('string');
		});
	});
});
