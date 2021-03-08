
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (!matrix || matrix.length === 0 )
		return []
  	return matrix.reduce((result, arr, index) => {
    	arr = index%2 === 0 ? arr : arr.reverse()
	    return result.concat(arr)
		}, []);
}

