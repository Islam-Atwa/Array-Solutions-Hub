/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Create 3 pointers
    let iNum1 = m - 1;
    let iNum2 = n - 1;
    let total = m + n - 1;


    while (iNum1 >= 0 && iNum2 >= 0) {
        if (nums1[iNum1] < nums2[iNum2]) {
            nums1[total--] = nums2[iNum2--];
        } else {
            nums1[total--] = nums1[iNum1--];
        }
    }

    // Add remaining elements from nums2 (if any)
    while (iNum2 >= 0) {
        nums1[total--] = nums2[iNum2--];
    }
};
// Explanation of the problem in Arabic:
// https://youtu.be/GDbDvcpqUQ4?si=MO-7WrVyzLkWmw57
//