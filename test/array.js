var assert = require('assert');
var should = require('should');

describe('Array', () => {
	describe('#indexOf()', () => {
		it('should return -1 when the value is not present', () => {
			assert.equal(-1, [1, 2, 3].indexOf(0));
		});
	});
	describe('#length()', () => {
		it('should return 3 when has three element', () => {
			assert.equal(3, [1, 2, 3].length);
		});
	});

	// BDD interface: describe(), context(), specify()
	describe('#indexOf()', function () {
		context('when not present', function () {
			specify('should not throw an error', function () {
				(function () {
					[1, 2, 3].indexOf(4);
				}).should.not.throw();
			});
			specify('should return -1', function () {
				[1, 2, 3].indexOf(4).should.equal(-1);
			});
		});
		context('when present', function () {
			it.skip('should return the index where the element first appears in the array', function () {
				[1, 2, 3].indexOf(3).should.equal(2);
			});
		});
	});
});
