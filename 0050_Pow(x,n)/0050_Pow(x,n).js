/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let result = 1;

    if(n === 0) return result

    result = x ** Math.abs(n)

    if(n>0){return result} else if(n<0){return 1/result}

    return result
};
