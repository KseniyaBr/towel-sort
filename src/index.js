
// You should implement your task here.

module.exports = function towelSort (matrix) {
	return matrix.reduce((result, arr) => {
    	return result.concat(arr)
	}, [])
}

