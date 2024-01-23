/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let visted = new Set()
    let len = isConnected.length;
    let count = 0
    for(let i=0;i<len;i++){
        if(!visted.has(i)){
            count++
            visted.add(i)
            travel(i)
        }
    }
    // console.log(count)
    return count

    function travel(idx){
        for(let i=0;i<len;i++){

            if(isConnected[idx][i]===1 && idx!==i && !visted.has(i)){
                visted.add(i)
                travel(i)
            }
        }
    }
};