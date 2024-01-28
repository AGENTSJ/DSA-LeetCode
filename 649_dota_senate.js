/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  
    senate = senate.split("")
    while(true){

        for(let i=0;i<senate.length;i++){
            removeop(senate,i)
        }
        
        let [flag,val] = goaltest(senate) 
        if(flag){
            return predict(val)
        }
    }
    
   


};
function removeop(senate,idx){

    chosencand = senate[idx];

    if(chosencand!=='N'){

        if(chosencand==='R'){
            
            for(let i=1;i<=senate.length;i++){
                let sridx = idx+i;

                if(sridx>=senate.length){
                    sridx = sridx-senate.length
                }
                
                if(senate[sridx]==='D'){
                    senate[sridx]='N';
                    
                    break
                }
            }
        }else if(chosencand==='D'){


            for(let i=1;i<=senate.length;i++){
                let sridx = idx+i;

                if(sridx>=senate.length){
                    sridx = sridx-senate.length
                }
                if(senate[sridx]==='R'){
                    senate[sridx]='N';
                    
                    break
                }
            }
        }

    }
}
function goaltest(senate){
    let val=null
    let thresh =1;
    for(let i=0;i<senate.length;i++){

        if(senate[i]!='N'){
            if(thresh===0){
                if(senate[i]!==val){
                    return [false,val]
                }
                thresh++
            }
            thresh--
            val=senate[i]
        }
    }
    return [true,val]
}
function predict(ch){
    if(ch==='D'){
        return "Dire"
    }else{
        return "Radiant"
    }
}
