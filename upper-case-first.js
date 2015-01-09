var upper = require('upper-case');

/**
 * Uppercase the first character of a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str) {
  if (str == null) {
    return '';
  }

  str = String(str);

  return upper(str.charAt(0)) + str.substr(1);
};
