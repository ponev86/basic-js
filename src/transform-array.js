const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]

    if (i === 0 && (item === '--discard-prev' || item === '--double-prev')) continue
    if (i === arr.length - 1 && (item === '--discard-next' || item === '--double-next')) continue

    if (item === '--double-next') {
      result.push(arr[i + 1], arr[i + 1])
      i += 1
    }

    if (item === '--double-prev') {
      result.push(arr[i - 1])
    }

    if (item === '--discard-next') {
     if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
       i += 2
       continue
     }
     else {
       i += 1
       continue
     }
    }

    if (item === '--discard-prev') {
      result.pop()
    }

    if (item !== '--double-next' && item !== '--double-prev' && item !== '--discard-next' && item !== '--discard-prev') result.push(item)
  }

  return result
};
