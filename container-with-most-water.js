// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */

// works but inefficient Times out on huge lists
var maxArea = function(height) {
  let max = height.reduce((acc,val,i,heights)=>{
    let area = heights.reduce((acc2,val2, i2)=>{
      // calculates all areas using each outer val
      if (i2 <= i) return acc2;
      let h = val < val2 ? val : val2;
      let w = i2 - i;
      let area2 = h * w;
      return area2 > acc2 ? acc2 = area2 : acc2;
    },0)
    
    return area > acc ? acc = area : acc;
  },0);

  return max;
};

// refactor
var maxArea = function(height) {
  let max = height.reduce((acc,val,i,heights)=>{
    let best = 0;
    for (let j=heights.length;j>0;j--) {
      let val2 = heights[j];
      if (val2 >= val) {
	let w = j - i;
	let h = val;
	let area = h * w;
	best = area > best ? area : best;
      }
    }
    acc = best > acc ? best : acc;
    return acc;
  },0);

  return max;
};
