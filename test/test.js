//var assert = require('assert');

var phone = require('../js/phone.js');

describe('Checking phone Format', function(){
	context('when no input phone number', function(){
		it('should return false', function(){
			phone.isValidPhoneNumber("").should.equal(false);
		});
		it('should not throw an error',function(){
			(function(){
			phone.isValidPhoneNumber("")
			}).should.not.throw();
		});
	});

	context('when input phone number is a string', function(){
		it('should return false', function(){
			phone.isValidPhoneNumber("sadfasg").should.equal(false);
		});
		it('should not throw an error',function(){
			(function(){
			phone.isValidPhoneNumber("sadfasdf")
			}).should.not.throw();
		});
	});

	context('when input phone number has more than 10 digits.', function(){

	});
});
