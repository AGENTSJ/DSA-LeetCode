/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    // console.log("..................")
    let p1 =0;
    let p2 =0;
    let res =[];
    let temp =[];
    while(p1<nums.length){
        console.log(p1,p2,p1<=p2)
        if(valid(nums,k,p1,p2)){
            temp =[];
            temp.push(nums[p1]);
            temp.push(nums[p2]);
            nums.splice(p1,1);
            nums.splice(p2-1,1);
            // console.log(temp,"........",p1,p2,nums.length)
            res.push(temp);
            p2=p1;
        }else{
            p2++;
            if(p2===nums.length){
                p1++;
                p2=p1;
            }
        }
    }
    // console.log("resuly",res)
    return res.length;
};

function valid(nums,k,p1,p2){
    if(p1===p2){
        return false
    }else{

        if(nums[p1]+nums[p2]===k){
            return true
        }else{
            return false
        }
    }
}
