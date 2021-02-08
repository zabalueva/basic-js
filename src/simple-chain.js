const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

	getLength() {
		return this.chain.length;
	},

	addLink(value) {
		if (value === undefined){
			value = ' ';
		}
		this.value = value;
		chain = this.chain;

		chain.push(`( ${value} )`);
		return this;
	},

  removeLink(position) {
    if (typeof (position) !== 'number' ||
			position > this.chain.length ||
			position == 0) {

	throw new Error("THROW");
}
		value = this.value;
		for (let i = 0; i < this.chain.length; i++) {
			if (position == i) {
				this.chain.splice(position - 1 , 1)
			}
		}
		return this;
	},

	reverseChain() {
		this.chain.reverse();
		return this;
	},

	finishChain() {
		return this.chain.join('~~');
	}
};

module.exports = chainMaker;
