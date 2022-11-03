/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let chars = {};
    i=0;
    for(let j=0;j<s.length;j++){
        if(chars[s[j]]){
            i = Math.max(chars[s[j]],i);
        }
        max = Math.max(max,j-i+1);
        chars[s[j]] = j+1;
    }
    return max;
};
