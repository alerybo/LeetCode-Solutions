/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = String(x)
    let array = string.split('');
    let backwards = array.reverse();
    if(string === backwards.join('')){
        return true
    } else {
        return false;
    }
};
