/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let counter = 0;
  let result = '';
  if (str === '') {
    return result;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      counter++;
    } else {
      if (counter === 0) {
        result += `${arr[i - 1]}`;
      } else {
        result += `${counter + 1}${arr[i - 1]}`;
      }
      counter = 0;
    }
  }
  if (counter === 0) {
    result += `${arr[arr.length - 1]}`;
  } else {
    result += `${counter + 1}${arr[arr.length - 1]}`;
  }
  return result;
}

module.exports = encodeLine;
