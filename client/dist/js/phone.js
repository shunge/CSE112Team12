//var exports = module.exports = {};

// re: The accepting regular expression for checking valid phone numbers (isValidPhoneNumber)
var re = new RegExp(String.raw`^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$`);

/**
 * Name: isValidPhoneNumber
 * @param strNumToCheck: String of the phone number to validate its format against the accepting regular
 *        expression (re)
 * @return boolean true if it is valid, false if not
 */
function isValidPhoneNumber(strNumToCheck) {
  var matches = strNumToCheck.match(re);
  if(!matches) return false;
  return ((matches.length === 1 && matches[0] === strNumToCheck) ? true : false);
}

/**
 * Name: setFormat
 * @param strNewRegex: String of the regex that is to be the new 'var re' (the accepting regular expression
 *        for valid phone numbers)
 * @return undefined (nothing)
 */
function setFormat(strNewRegex) {
  re = new RegExp(String.raw`${strNewRegex}`);
  console.log('New accepting regex: ' + String.raw`${strNewRegex}`);
}

/**
 * Name: convertToRegex
 * @param strPhoneInput: String of a potential phone number input to transform into a regular expression
 * @return string of the resultant regular expression that the param would satisfy
 */
function convertToRegex(strPhoneInput) {
  console.log('Str to parse and transform to regex: ' + strPhoneInput);
  var strSplit = strPhoneInput.split(/(\d+)/);
  var strBuildRe = '';
  console.log('Str split to parts: ' + strSplit);
  for(var strArrayIdx = 0; strArrayIdx<strSplit.length; strArrayIdx++) {
    if(!strSplit[strArrayIdx] || strSplit[strArrayIdx] === '') {
      continue;
    } else if (isNaN(parseInt(strSplit[strArrayIdx]))) {
      strBuildRe += strSplit[strArrayIdx].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    } else {
      strBuildRe += '[0-9]{' + strSplit[strArrayIdx].length + '}';
    }
  }
  console.log('New regex from Str: ' + strBuildRe);
  return strBuildRe;
}

module.exports = {
  isValidPhoneNumber: isValidPhoneNumber,
  setFormat: setFormat,
  convertToRegex: convertToRegex
}
