var Phone = require('../client/js/phone.js');
var phone = new Phone();

describe('Checking phone Format', function(){
	context('when no input phone number', function(){
		it('should return false', function(){
			phone.isValidPhoneNumber("").should.equal(false);
		});
	});

	context('when input phone number is a string', function(){
		it('should return false', function(){
			phone.isValidPhoneNumber("sadfasg").should.equal(false);
		});
	});

	context('when input phone number has more than 10 digits.', function(){
		it('should return false', function(){
			phone.isValidPhoneNumber("123-455-7858934").should.equal(false);
		});
	});

	context('when input correct phone number', function(){
		it('should return true', function(){
			phone.isValidPhoneNumber("858-900-8888").should.equal(true);
		});
	});

});

describe('Checking set Format', function(){

	context('input a format, chech if it is convert to regex correctly',
		function(){
			it('should return true',function(){
				var str = '';
				str = phone.convertToRegex("000-000-0000");
				phone.setFormat(str);
				phone.isValidPhoneNumber("858-900-8888").should.equal(true);
			});
		}
	);

	context('input another format, chech if it is convert to regex correctly',
		function(){
			it('should return true',function(){
				var str = '';
				str = phone.convertToRegex("0000000000");
				phone.setFormat(str);
				phone.isValidPhoneNumber("8589008888").should.equal(true);
			});
		}
	);

	context('set a format, but input a wrong format phone number', function(){
		it('should return false',function(){
			var str = '';
			str = phone.convertToRegex("000-000-0000");
			phone.setFormat(str);
			phone.isValidPhoneNumber("858.900.8888").should.equal(false);
		});
	});

	
});
