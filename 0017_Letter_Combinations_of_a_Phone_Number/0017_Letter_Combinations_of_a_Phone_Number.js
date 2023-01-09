/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return [];
    const legend = {
        "2" : ["a","b","c"],
        "3" : ["d","e","f"],
        "4":["g","h","i"],
        "5":["j","k","l"],
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"],
        "9":["w","x","y","z"],
    }
    let arrays = (digits.split("").map(digit => legend[digit]))
    return arrays.reduceRight((accumulator, currentValue) => {
        let sum = []
        for(let i=0;i<currentValue.length;i++){
            for(let j=0;j<accumulator.length;j++){
                sum.push(currentValue[i]+accumulator[j])
            }
        }
        return sum;
        }
    );
};
