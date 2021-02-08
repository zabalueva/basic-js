const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
		throw new Error("ERR");
	}

	let result = arr.map(item => item);

	for (let i = 0; i < result.length; i++) {
		if (result[i] == '--discard-next') {
			if (i == result.lenght - 1) {
				result.splice(i, 1)
			} else {
				result.splice(i + 1, 1);
			}
		}

		if (result[i] == '--discard-prev') {
			if (i == 0) {
				result.splice(i, 1)
			} else {
				result.splice(i - 1, 1);
			}
		}

		if (result[i] == '--double-next') {
			if (i + 1 !== result.length) {
				result.splice(i, 1, result[i + 1]);
			} else {
				result.splice(i, 1);
			}
		}

		if (result[i] == '--double-prev') {
			if (i == 0) {
				result.splice(i, 1)
			} else {
				result.splice(i, 1, result[i - 1]);
			}
		}
	}

	for (let i = 0; i < result.length; i++) {
		while (result[i] == '--discard-prev')
		{
			result.splice(i, 1)
		}
		while (result[i] == '--discard-next')
		{
			result.splice(i, 1)
		}
		while (result[i] == '--double-next')
		{
			result.splice(i, 1)
		}
		while (result[i] == '--double-prev')
		{
			result.splice(i, 1)
		}
	}

	for (let i = 0; i < result.length; i++) {
		while (result[i] == '--discard-prev') {
			result.splice(i, 1)
		}
	}

	return result;
};
