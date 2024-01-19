/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pointer = 0
    let lastPointer = nums.length
    while(pointer<lastPointer-1){
        if(nums[pointer]===0){
            
            nums.splice(lastPointer,0,0)//inserting at end
            nums.splice(pointer,1)//removing at pointer
            lastPointer = lastPointer-1

        }else{
            pointer++
        }
    }
};