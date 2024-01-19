/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let results = []
    let alpharr = alphaarray()
    console.log(alpharr)
    place(digits,0,alpharr,[],results)
    if(results[0]===""){results.pop()}
    return results

};

function place(digits,idx,alpharr,res,results){

    if(res.length===digits.length){console.log(res);results.push(res.join(''));return}
    let domain = alpharr[ parseInt(digits[idx])-1 ]

    for(let i=0;i<domain.length;i++){
        res.push(domain[i])
        place(digits,idx+1,alpharr,res,results)
        res.pop()
    }

}
function alphaarray(){
    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    let pointer = 0
    let slicedAlpha = [" "]
    while (true){   
        if(pointer>25){break}
        let window = 3
        if(pointer===15||pointer ===22){
            window=4
        }
        let val = alphabets.slice(pointer,pointer+window)
        pointer= pointer+window
        slicedAlpha.push(val)  
    }
    return slicedAlpha
}