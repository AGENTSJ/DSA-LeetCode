/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = "aeiouAEIOU"
    let vowCollector = []
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            vowCollector.push(s[i])
        }
    }
    vowCollector.reverse()
    let newS =[]
    let pointer = 0
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            newS.push(vowCollector[pointer])
            pointer++
        }else{

            newS.push(s[i])
        }
    }
    // console.log(newS)
    return newS.join('')
};