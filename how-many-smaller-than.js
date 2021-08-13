// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/submissions/

// first shot
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(num=>nums.filter(n=>n<num).length);
};

// based on Alexandras description
var smallerNumbersThanCurrent = function(nums) {
    let sz = nums.length;
    let res = new Array(sz).fill(0);
    for(let i=0;i<sz;i++){
        for(let x=i+1;x<sz;x++){
            if (nums[i] > nums[x]) res[i]++;
            if (nums[x] > nums[i]) res[x]++;
        }
    }
    return res;
};
