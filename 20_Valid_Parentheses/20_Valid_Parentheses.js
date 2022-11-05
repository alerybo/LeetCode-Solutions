/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 != 0) return false;
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (const char of s){
        if(char in map){
            stack.push(char);
        } else if(map[stack.pop()] !== char){
            return false
        }
    }
    
    return !stack.length
    
};
