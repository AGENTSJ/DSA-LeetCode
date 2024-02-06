/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let res =[];
    let ptr =0;
    for(let i=0;i<strs.length;i++){
        let key = getKey(strs[i]);

        if(map.has(key)){
            let idx = map.get(key);
            res[idx].push(strs[i]);
        }else{
            map.set(key,ptr);
            res.push([strs[i]]);
            ptr++;
        }
    }
    return res
};
function getKey(str){
    let key = new Array(26).fill(0)
    for(let i=0;i<str.length;i++){
        let idx = str.charCodeAt(i)-"a".charCodeAt(0);
        key[idx]++
  
    }
    return key.join()
}
