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
		if (typeof(value) == 'function'){
			value = 'function() {}';
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
		this.chain = [];
	  throw new Error("THROW");
		}

		chain = this.chain,
		value = this.value;

		for (let i = 0; i < this.chain.length; i++) {
			if (position == i) {
				this.chain.splice(position - 1 , 1)
			}
		}
		return this;
	},

	reverseChain() {
		chain = this.chain,
		chain.reverse();
		return this;
	},

	finishChain () {
		let result = this.chain.join('~~');
		this.chain = [];
		return result;
	}
};

module.exports = chainMaker;
