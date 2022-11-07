/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while(x != 0){
        let pop = x % 10;
        x = Math.sign(x)*Math.floor(Math.sign(x)*(x / 10));
        
        if(result > 0x7FFFFFFF/10 || (result == 0x7FFFFFFF / 10 && pop > 7)) return 0;
        if(result < -0x7FFFFFFF/10 || (result == -0x7FFFFFFF / 10 && pop <-8)) return 0;
        
        result = result * 10 + pop;
    }
    
    return result
}
