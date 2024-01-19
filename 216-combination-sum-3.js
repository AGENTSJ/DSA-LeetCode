/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let results=[]
    let arr = new Array(k).fill(0)
    combination(0,arr,results,k,n,1)
    console.log(results)
    return results
};

function combination(pos,arr,results,k,n,start){
   
    if(pos>k-1){

        let res = arr.reduce((acc,cur)=>acc+cur,0)
        if(res===n){

            if(arr.length!=0){
                results.push([...arr])
            }
            
        }
        return 
    }

    for(let i =start;i<10;i++){
       
        arr[pos] = i
        combination(pos+1,arr,results,k,n,i+1)

       
    }
    
}
