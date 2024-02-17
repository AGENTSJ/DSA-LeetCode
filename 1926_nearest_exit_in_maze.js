/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {

    let colen = maze[0].length;
    let rowlen = maze.length;
    let pathque = [entrance];
    let visited = new Set()
    let pos = null;
    let len = null;
    let step = -1;
    let res = null;
    visited.add(entrance.toString())
    while(pathque.length>0){

        len = pathque.length;

        step++
        while(len>0){
            pos = pathque.shift();
            
            len--;
            res = visit(pos)
  
            if(res){
                return step
            }
        }
        // console.log(visited)
    }
    return -1
    

    function visit(pos){
        if(exitCheck(pos)){
            return true
        }
        // visited.add(pos.toString())
        findDomain(pos)
        
     
        return false
    }
    function exitCheck(pos){
        let [x,y ]= pos;
        if(x===entrance[0]&&y===entrance[1]){
            return false
        }else{
            if(x===0 || y===0 || x===rowlen-1 || y===colen-1){
                // console.log("foundddd")
                return true
            }
        }
        return false
    }
    function findDomain(pos){
        let [x,y]= pos
        let domains = [
            [ x , y+1 ],
            [ x , y-1 ],
            [ x+1 , y ],
            [ x-1 , y ]
        ]
        
        let [tx,ty] = [null,null]
       
        for(let i = 0;i<4;i++){
            [tx,ty] = domains[i];
            
            if(tx<rowlen && tx>=0 && ty<colen && ty>=0 ){
           
                if(!visited.has(domains[i].toString()) && maze[tx][ty]==="."){
                    visited.add(domains[i].toString())
                    pathque.push(domains[i])
                }

            }
            
        }
        
        
    }
}


