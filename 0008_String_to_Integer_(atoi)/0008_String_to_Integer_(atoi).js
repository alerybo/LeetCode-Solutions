/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result = 0;    
    let index = 0;
    let sign = 1;
    
    while(s[index] === " "){
        index++;
    }
    
    if(s[index] == "-" || s[index] == "+"){
        sign = (1 * (s[index] + "1"));
        index++;
    }
    
    while(s[index] === "0"){
        index++;
    }
    
    while(s[index] >= "0" && s[index] <= "9"){

        result *= 10;
        result += s[index] * 1
        index++;
    }    
            if(result* sign < -0x7FFFFFFF){
            return -0x7FFFFFFF -1
        }
        if(result* sign > 0x7FFFFFFF){
            return  0x7FFFFFFF
        }
    
    return result * sign; 
    
};
