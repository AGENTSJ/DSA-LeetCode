/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let mxAr = 0
    let poin1 = 0
    let poin2 = height.length-1

    while(true){
        if(poin1>=poin2){
            break
        }
        let L = Math.min(height[poin1],height[poin2])
        let B = poin2-poin1
        let ar = L*B
        if(mxAr<ar){
            mxAr = ar
        }
        if(height[poin1]>height[poin2]){
            poin2--
        }else{
            poin1++
        }
    }  
 
    return mxAr
};