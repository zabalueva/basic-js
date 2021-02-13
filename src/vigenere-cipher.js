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
		let needSym;
		let arrKey = Array.from(key.toUpperCase());
		let arrMessage = Array.from(message.toUpperCase().replace(/\s/g, ''));
		let strMessage = message.toUpperCase().split('');

		for (let i = 0; i < message.length; i++) {
			arrKey.push(arrKey[i])
		}

		for (let i = 0; i < message.length; i++){
			if (this.alphabet.indexOf(strMessage[i]) !== -1) {
        needSym = this.alphabet.indexOf(strMessage[i]) + this.alphabet.indexOf(arrKey[i]);
				while (needSym > 25) {
					needSym = needSym - 26;
				}
				this.result.push(this.alphabet[needSym])
      } else {
				this.result.push(strMessage[i]);

				if (strMessage[i] == ' ') {
					needSym = this.alphabet.indexOf(strMessage[i+1]) + this.alphabet.indexOf(arrKey[i]);
				  while (needSym > 25) {
					  needSym = needSym - 26;
				  }
					this.result.push(this.alphabet[needSym])
				}

			}
		}

		if (this.crypto == false) {
			return this.result.reverse().join('')
		}


		return this.result.join('');
	}

	decrypt(message, key) {
		let needSym;
		let arrKey = Array.from(key.toUpperCase());
		let arrMessage = Array.from(message.toUpperCase())
		this.result = [];
		for (let i = 0; i < message.length; i++){
			if (message[i] == ' ') {
				needSym = ' ';
				this.result.push(needSym)
			} else {
				needSym = this.alphabet.indexOf(arrMessage[i]) - this.alphabet.indexOf(arrKey[i]);
			/* 	while (needSym > 25) {
					needSym = needSym - 26;
				} */
				this.result.push(this.alphabet[needSym])
			}
		}
		if (this.crypto == false) {
			return this.result.reverse().join('')
		}
		return this.result.join('');

  }
}

module.exports = VigenereCipheringMachine;
