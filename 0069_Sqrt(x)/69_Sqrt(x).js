/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low= 0;
    let high=Math.floor(x/2 + 1)
    while(low<high){
        mid = low + Math.floor((high -low + 1)/2);
        if (mid * mid > x){
            high = mid -1
        } else {
            low=mid
        }
    }return low
};
