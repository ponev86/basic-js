const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'} = options

  str = str !== undefined ? String(str) : ''
  addition = addition !== undefined ? String(addition) : ''

  if (!repeatTimes) return `${str}${addition}`

  return Array(repeatTimes).fill(str).map(i => {

    if (additionRepeatTimes) {
      return `${i}${Array(additionRepeatTimes).fill(addition).join(additionSeparator)}`
    }

    return `${i}`
  }).join(separator)

};
  