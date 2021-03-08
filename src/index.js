
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix.reduce((result, arr, index) => {
    arr = index%2 === 0 ? arr : arr.reverse()
    return result.concat(arr)
	}, []);
}

