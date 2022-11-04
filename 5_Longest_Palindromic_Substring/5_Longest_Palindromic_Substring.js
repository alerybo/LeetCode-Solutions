/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //function expanding around a center
    const expand = (s,left,right) =>{
        while(  left >= 0 && right < s.length && s[left] === s[right]){
            left --;
            right ++
        }
        return right - left -1;
    }
        
    let start = 0;
    let end = 0;    
    
    for(let i = 0; i < s.length; i++){
        let length = Math.max(expand(s,i,i),expand(s,i,i+1));
        if(length > end-start){
            start = i-(length/2)+1;
            end = i+length/2
        }
    }

    return s.substring(start,end+1);
};
