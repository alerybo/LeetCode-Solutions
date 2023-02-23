/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums=nums.sort((a,b)=>a-b)
    let result = nums[0]+nums[1]+nums[2]
    for(let i=0;i<nums.length-2;i++){
        let j = i+1;
        k = nums.length-1
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k]
            if(Math.abs(target-result) > Math.abs(target-sum)){
                    result = sum;
                }
            if(sum<target){
                j++
            } else {
                k--
            }
        }                 
    }
    return result
};
