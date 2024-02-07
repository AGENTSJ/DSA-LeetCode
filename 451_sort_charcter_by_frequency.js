/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    let map = new Map()

    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1)
        }else{
            map.set(s[i],1)
        }
    }
    let res = [...map]
    res.sort((a,b)=>{return b[1]-a[1]})
    
    let fin=""
    for(let i=0;i<res.length;i++){
  
        fin = fin+res[i][0].repeat(res[i][1]);
    }

    return fin
};
