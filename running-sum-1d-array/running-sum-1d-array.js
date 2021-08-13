// https://leetcode.com/problems/running-sum-of-1d-array/

// first try
var runningSum = function(nums) {
  let res = [];
  nums.reduce((sum,num)=>{
    let val = sum + num;
    res.push(val)
    return val
  },0);
  return res;
};

// trying to make it faster
var runningSum = function(nums) {
  
};


