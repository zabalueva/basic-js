const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
		this.calculateDepth = this.calculateDepth.bind(this)
	}

	calculateDepth(arr) {
		if (arr instanceof Array) {
			let result = 0;
			if (arr == []) {
				result = 1;
			}
			return 1 + result + Math.max(...arr.map((item) => this.calculateDepth(item)), result);
		} else return 0;
	}
}