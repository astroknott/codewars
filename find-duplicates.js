/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    return nums.filter((num, i) => nums.indexOf(num) !== nums.lastIndexOf(num) )[0];
};
