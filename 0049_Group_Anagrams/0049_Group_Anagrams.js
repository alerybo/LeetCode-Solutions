/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result ={}
    strs.forEach(str => {
        const key = str.split("").sort().join("")
        if(result[key]){
            result[key].push(str)
        } else {
            result[key] = str.split(" ")
        }
    })
    return Object.values(result)
};
