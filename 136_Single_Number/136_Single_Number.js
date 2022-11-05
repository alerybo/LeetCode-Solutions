/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort()
    let stack = [];

    for (let i = 0; i < nums.length; i++){
        stack.includes(nums[i]) ? stack.pop() : stack.push(nums[i])
    }
    
    return stack[0];
};
