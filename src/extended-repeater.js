const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' } = options;

	if (typeof (str) !== 'string') {
		String(str)
	}

	if (addition === undefined) {
		return (str + separator)
		.repeat(repeatTimes)
		.slice(0, -separator.length);
	}

	if (typeof (addition) !== 'string') {
		String(addition)
	}

	return (str + (addition + additionSeparator)
		.repeat(additionRepeatTimes)
		.slice(0, -additionSeparator.length) + separator)
		.repeat(repeatTimes)
		.slice(0, -separator.length);
};
