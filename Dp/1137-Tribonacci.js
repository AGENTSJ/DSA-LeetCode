/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let map = new Map()
    return T(n,map)
  };
  
  function T(n,map){
      
      if(n===0){
          return 0
      }
      if(n===1||n===2){
          return 1
      }
      
      let first = map.get(n-1)?map.get(n-1):T(n-1,map)
      map.set(n-1,first)
      let second = map.get(n-2)?map.get(n-2):T(n-2,map)
      map.set(n-2,second)
      let third = map.get(n-3)?map.get(n-3):T(n-3,map)
      map.set(n-3,third)
      
      return first+second+third
  }