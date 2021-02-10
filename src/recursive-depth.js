const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
		this.depth = 1;
		this.maxDepth = 0;
	}

	calculateDepth(arr) {
		let result = 1;
		arr.map((item) => {
			if (Array.isArray(item)) {
				return result = 1 + this.calculateDepth(item)
			}
		}

		)
		return result;

	}
}