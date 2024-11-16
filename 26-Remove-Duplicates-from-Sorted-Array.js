/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index =1;
    for(let j=1; j<nums.length; j++){
        if (nums[j] !== nums[index - 1]){
            nums[index] = nums[j];
            index++;
        }
    }
    return index;
};

// Solve the problem using 'set object'
// var removeDuplicates = function(nums) {
//     let uniqueArray = [...new Set(nums)];
//     return uniqueArray;
// };