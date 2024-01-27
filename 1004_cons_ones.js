/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let strtwin = 0
    let endwin = -1
    let thresh =k;
    let max=0
    
    let ptr=0
    let count =0
    while(ptr<nums.length){
        
        if(nums[ptr]===1){
            endwin++
            count++
            ptr++
        }else{
            if(thresh!==0){
                count++
                endwin++
                thresh--
                ptr++
            }else{
                
                if(count>max){
                    max = count
                }   
                strtwin = strtwin+1
                endwin = strtwin-1
                ptr = strtwin
                count=0
                thresh = k
            }
        }
    }
    if(count>max){
        max = count
    }
    return max
};

