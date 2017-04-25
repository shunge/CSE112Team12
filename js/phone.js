var re = new RegExp(String.raw`^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$`);

function isValidPhoneNumber(strNumToCheck) {
	var matches = strNumToCheck.match(re);
	if (matches) {
		return true;
	}
	return false;
}


function setFormat() {
	var v = document.getElementById('phoneformat').value;
	var telNumber = document.getElementById('telnumber').value;
	//var re = new RegExp(String.raw`^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$`);
	if (v != null && v !="") {
		re = new RegExp(String.raw`${v}`);
	}
	alert(isValidPhoneNumber(telNumber));
}

module.exports = {
	isValidPhoneNumber: isValidPhoneNumber,
	setFormat: setFormat
}
