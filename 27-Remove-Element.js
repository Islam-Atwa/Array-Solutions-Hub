/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k =0;
    for (let i= 0; i < nums.length; i++){
        if (nums[i] !== val){
            // Make k equal to i
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
// Explanation of the problem in Arabic:
// https://www.youtube.com/watch?v=KdseYRzLQig






