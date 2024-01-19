/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {

    let result =[]
    let poin = 0
    let top = -1
    while(poin<asteroids.length){
        result.push(asteroids[poin])
        poin++
        top++
        while(result[top]<0 && result[top-1]>0){
            let res = collide(result[top-1],result[top])

            result.pop()
            result.pop()
            top = top-2
            if(res!==0){
                result.push(res)
                top++
            }
        }
    }
    return result
}

function collide(back,front){

    let lfront = Math.abs(front)
    let lback = Math.abs(back)
    if(lfront===lback){
        return 0
    }
    if(lfront>lback){
        return front
    }
    return back
}