/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let result=[]
    let maxCount = Math.max(...candies)
    for(let i=0;i<candies.length;i++){
        // console.log(maxCount)
        if(candies[i]+extraCandies>=maxCount){
            result.push(true)
        }else{
            result.push(false)
        }
    }
    return result
};