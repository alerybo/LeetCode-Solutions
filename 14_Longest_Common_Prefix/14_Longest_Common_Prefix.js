/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    if(strs.length === 0) return prefix;
    let sortedArray = strs.sort((a, b) => a.length - b.length);
    console.log("sorted:" + sortedArray)
    
    for(let i = 0; i < sortedArray[0].length; i++){
        let check = sortedArray[0][i];
        console.log("check: " + check)
        if(strs.every(string => string[i] === check)){
           prefix += check;
           } else {
            break;
        }  
    }
    
    return prefix ;
};
