/**
 * @param {number[]} nums
 * @return {number}
 */

function rob(nums) {
    let max =0
    let maxBefore = 0

    for(let i=0;i<nums.length;i++){
        let temp = Math.max(nums[i]+maxBefore,max)
        maxBefore = max
        max = temp
    }
    return max
  };