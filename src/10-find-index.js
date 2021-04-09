/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let medianaIndex = 0;
  if (array[rightIndex] === value) {
    return rightIndex;
  }
  while (array[medianaIndex] !== value) {
    medianaIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (array[medianaIndex] > value) {
      rightIndex = medianaIndex;
    } else {
      leftIndex = medianaIndex;
    }
  }
  return medianaIndex;
}

module.exports = findIndex;
