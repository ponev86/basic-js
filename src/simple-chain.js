const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value = '') {
    value = value === '' ? `( )` : `( ${value} )`
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    if (!parseInt(position) || isNaN(parseInt(position)) || this.chain[position] === undefined) {
      this.chain = []
      throw new Error()
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let chained = this.chain.join('~~');
    this.chain = []
    return chained
  }
};

module.exports = chainMaker;
