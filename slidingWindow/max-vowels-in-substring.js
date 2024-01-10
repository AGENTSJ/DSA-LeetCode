/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let max=0
    let vowel = ['a','e','i','o','u']
    let windowstart = 0
    let windowend = 0
    let currentcount = 0
    for(let i=0;i<k;i++){
        if(vowel.includes(s[windowend])){
            currentcount++
        }
        windowend++
        max = currentcount
    }
    windowend = windowend-1
    for(let i = 0;i<s.length-1;i++){
        if(vowel.includes(s[windowstart])){
            currentcount = currentcount-1
        }
        if(vowel.includes(s[windowend+1])){
            currentcount = currentcount+1
        }
        windowstart = windowstart+1
        windowend = windowend+1
        if(currentcount>max){
            max = currentcount
        }
    }

    return max
};