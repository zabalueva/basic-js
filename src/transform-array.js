const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
		throw new Error("ERR");
	}

	let result = arr.map(item => item);

	for (let i = 0; i < result.length; i++) {
		if (result[i] == '--discard-next') {
			result.splice(i, 2);
		}

		if (result[i] == '--discard-prev') {
			result.splice(i - 1, 2);
		}

		if (result[i] == '--double-next') {
			result.splice(i, 1, result[i + 1] );
		}

		if (result[i] == '--double-prev') {
			result.splice(i, 1, result[i - 1] );
		}
	}

	return result;
};
