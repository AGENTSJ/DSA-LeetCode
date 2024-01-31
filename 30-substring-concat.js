/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let winlen = words[0].length;
  
    let res =[];
    let ptr=0;
    let map =new Map()
    createmap(map,words)

    for(let i=0;i<s.length;i++){

        let start = i;
        ptr = start;
        let domain = new Map([...map])
        let flag =false;
   
        while(true){

            let curstr = s.slice(ptr,winlen+ptr);
            

            if(winlen+ptr>s.length){
                if(domain.size===0){
                  
                    flag = true;
                    break;
                }
            }
            
            if(domain.has(curstr)){
            
                removeValue(domain,curstr)
                ptr = ptr+winlen;
            }else{
                
                if(domain.size===0){
                  
                    flag = true;
                    break;
                }else{
                    flag = false;
                    break;
                }
            }
        }
        
        if(flag===true){
            res.push(start);
        }
        

    }
    return res;
};

function createmap(map,arr){

    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i],1);
        }
    }
}
function removeValue(map,key){
    let value = map.get(key);
    map.set(key,value-1)
    if(value===1){
        map.delete(key)
    }
}
