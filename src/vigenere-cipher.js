const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(crypto) {
		const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		this.alphabet = alphabet;
		let result = [];
		this.result = result;
		this.crypto = crypto;
}

	encrypt(message, key) {
		this.result = [];
		let needSym;
		let arrKey = Array.from(key.toUpperCase());
		let arrKeynew = [];
		let arrMessage = Array.from(message.toUpperCase());

		let copyMsg = message;
		let strMessage = copyMsg.toUpperCase().replace(/\s/g, '');

		for (let i = 0; i < arrMessage.length; i++) {
			if (i >= arrKey.length) {
					arrKeynew.push(arrKey[i - Math.floor(i/arrKey.length) * arrKey.length])
			} else {
				arrKeynew.push(arrKey[i])
			}
		}

		let needInd = 0;
		let count = 0;

		for (let i = 0; i <= arrMessage.length; i++){
			count = this.result.filter((el) => el == " ").length;
			if (this.alphabet.indexOf(arrMessage[i]) !== -1) {
				if (this.result.includes(' ')) {
					needInd = i - count;
				} else {
					needInd = i;
				}
				needSym = this.alphabet.indexOf(strMessage[needInd]) + this.alphabet.indexOf(arrKeynew[needInd]);
					while (needSym > 25) {
						needSym = needSym - 26;
				}
				this.result.push(this.alphabet[needSym]);
			} else {
				this.result.push(arrMessage[i]);
			}
		}
		if (this.crypto == false) {
			return this.result.reverse().join('')
		}
		return this.result.join('');
	}

	decrypt(message, key) {
		this.result = [];
		let needSym;
		let needInd;
		let count = 0;
		let copyMsg = message;
		let strMessage = copyMsg.toUpperCase().replace(/\s/g, '');
		let arrKey = Array.from(key.toUpperCase());
		let arrMessage = Array.from(message.toUpperCase());

		let arrKeynew = [];

		for (let i = 0; i < arrMessage.length; i++) {
			if (i >= arrKey.length) {
					arrKeynew.push(arrKey[i - Math.floor(i/arrKey.length) * arrKey.length])
			} else {
				arrKeynew.push(arrKey[i])
			}
		}

		for (let i = 0; i < message.length; i++){

			count = this.result.filter((el) => el == " ").length;
			if (this.alphabet.indexOf(arrMessage[i]) !== -1) {
				if (this.result.includes(' ')) {
					needInd = i - count;
				} else {
					needInd = i;
				}
				needSym = this.alphabet.indexOf(strMessage[needInd]) - this.alphabet.indexOf(arrKeynew[needInd]);
					while (needSym < 0) {
						needSym = needSym + 26;
				}
				this.result.push(this.alphabet[needSym]);
			} else {
				this.result.push(arrMessage[i]);
			}
		}
		if (this.crypto == false) {
			return this.result.reverse().join('')
		}
		return this.result.join('');

  }
}

module.exports = VigenereCipheringMachine;
