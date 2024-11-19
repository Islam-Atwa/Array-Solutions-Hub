/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // example -> [1,3,5,6]
    let left = 0;                    // left = 1
    let right = nums.length - 1;    // rigth = 6

    while (left <= right){
        let mid = Math.floor((left + right) / 2);    // mid= 3
        if (nums[mid] === target ){
            return mid;
        }else if (nums[mid] > target){
            right = mid -1;                  // rigth become = 5
        }else{
            left = mid + 1;
        }
    }
    return left;
};
