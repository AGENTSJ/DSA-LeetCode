/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    let table1 = new Map()
    let table2 = new Map()

    if(word1.length!=word2.length){
        return false
    }else{
        for(let i=0;i<word1.length;i++){
            
            if(table1.has(word1[i])){
                table1.set(word1[i],table1.get(word1[i])+1)
            }else{
                table1.set(word1[i],1)
            }
            if(table2.has(word2[i])){
                table2.set(word2[i],table2.get(word2[i])+1)
            }else{
                table2.set(word2[i],1)
            }
        }
        let testarr = [...new Set(word1)]
        for(let i =0;i<testarr.length;i++){

            let current = table1.get(testarr[i])
            let flag = true

            for(let j=0;j<testarr.length;j++){
                let comparing = table2.get(testarr[j])
                if(current===comparing){
                    flag = false
                    table2.set(testarr[j],-1)
                    break
                }
            }
            if(flag){
                return false
            }
        }
        return true
    }
};