const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' } = options;

	return (str + (addition + additionSeparator)
		.repeat(additionRepeatTimes)
		.slice(0, -additionSeparator.length) + separator)
		.repeat(repeatTimes)
		.slice(0, -separator.length);
};
