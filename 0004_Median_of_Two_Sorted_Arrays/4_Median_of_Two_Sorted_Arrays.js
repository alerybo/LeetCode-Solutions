/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let array = ([...nums1,...nums2]).sort((a, b) => a - b);
    let n = array.length;
    if (n % 2 == 1){
        return array[(n-1)/2];
    } else if(n % 2 == 0){
        return (array[n/2-1] + array[n/2])/2;
    }
};
