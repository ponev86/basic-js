const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return [].concat(...matrix).reduce((total, item) => total += item === '^^' ? 1 : 0, 0)
};
