const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(reverse = true) {
    this.reverse = reverse
    this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.square = this.generateSquare()
  }

  generateSquare() {
    const squareArr = []
    
    for (let i = 0; i < this.alpha.length; i++) {
      let row = this.alpha.slice(i)
      
      row += this.alpha.slice(0, i)
      squareArr.push(row)
    }
    return squareArr
  }

  repeatKey(firstString, secondString) {
    let resultString = ''
    const  firstStringLength = firstString.length

    let it = 0
    for (let i = 0; i < secondString.length; i++) {
      if (i % firstStringLength === 0) {
        it = 0
      }
      resultString += firstString[it]
      it++
    }
    
    return resultString
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('function must have two parameters')

    message = message.toUpperCase()
    key = key.toUpperCase()

    let encryptString = ''
    const newKey = this.repeatKey(key, message)

    let it = 0
    for (let item = 0; item < message.length; item++) {
      if (this.alpha.includes(message[item])) {
        const i = this.alpha.indexOf(message[item])
        const j = this.alpha.indexOf(newKey[it])

        encryptString += this.square[i][j]
        it++

      } else {
        encryptString += message[item]
      }
    }
    return (this.reverse) ? encryptString : encryptString.split('').reverse().join('')

  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('function must have two parameters')

    message = message.toUpperCase()
    key = key.toUpperCase()

    let decryptString = ''
    const newKey = this.repeatKey(key, message)

    let it = 0
    for (let item = 0; item < message.length; item++) {
      if (this.alpha.includes(message[item])) {
        const i = this.alpha.indexOf(newKey[it])
        const j = this.square[i].indexOf(message[item])

        decryptString += this.alpha[j]
        it++
      }
      else {
        decryptString += message[item]
      }
    }

    return (this.reverse) ? decryptString : decryptString.split('').reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
