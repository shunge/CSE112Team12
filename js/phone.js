function CheckPhoneNum(){
	var format_elem = document.getElementById('phoneformat').value;
	var telnumber = document.getElementById('telnumber').value;
	console.log(exports);
	regex = setFormat(format_elem, telnumber);
	alert(isValidPhoneNumber(telnumber,regex));
}

function isValidPhoneNumber(strNumToCheck,regex) {
	var matches = strNumToCheck.match(regex);
	if (matches) return true;
	return false;
}


function setFormat(pformat,telnumber) {
	var regex = new RegExp(
		String.raw`^((\([0-9]{3}\))|([0-9]{3}))[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$`);

	//if format is null, then use default regex
	if (pformat != null && pformat !="") {
		var new_regex = "^";
		for (var i in pformat) {
			char = pformat[i];
			if (isDigit(char)){
				new_regex += "[0-9]";
			}else{
				new_regex += ('\\' + char);
			}
		}
		new_regex += "$";
		regex = new RegExp(String.raw`${new_regex}`);
	}
	return regex;
}

//helper function to check if the given character is a digit
function isDigit(digit_str){
	return digit_str.match(/[0-9]/) != null;
}


module.exports = {
	isValidPhoneNumber : isValidPhoneNumber,
	setFormat : setFormat
}

