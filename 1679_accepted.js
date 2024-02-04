/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let set =new Set();
    let result=0
    for(let i of nums){

        let val = k-i;
        
        if(set[val]>=1){
            result++;
            set[val]--;
        }else{
            if(set[i]===undefined){
                set[i]=1;
            }else{
                set[i]++;
            }
        }
    }
    return result
};

