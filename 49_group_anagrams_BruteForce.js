/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let ptr =0;
    let res =[]
    // find_And_Add_Combination("","eat",3,map,0)
    // console.log(map)

    for(let i = 0;i<strs.length;i++){
        if(map.has(strs[i])){
            let idx = map.get(strs[i])
            // console.log(res)
            res[idx].push(strs[i]);
        }else{
            res.push([strs[i]]);
            find_And_Add_Combination("",strs[i],strs[i].length,map,ptr)
            ptr++;

        }
    }
    // console.log(res)
    return res
};

function find_And_Add_Combination(res,domain,len,map,key){
    // console.log(res,res.length,len)
    if(res.length===len){
        map.set(res,key)
    }
    for(let i=0;i<domain.length;i++){
        let newres =res;
        newres = newres+domain[i];
        let newdomain = domain.slice(0,i)+domain.slice(i+1);
        find_And_Add_Combination(newres,newdomain,len,map,key);

    }
}
