minMovesToCaptureTheQueen(1,1,0,0,2,1)
function minMovesToCaptureTheQueen(a, b, c, d, e, f) {
    
    //elph
    let visited = new Set([])
    elephant([0,0],[0,0],0,[7,7])

    function elephant(current,dir,cost,target){
        let domain=[
            new Set([current[0],current[1]+1]).has(8) ? null :[current[0],current[1]+1],
            new Set([current[0],current[1]-1]).has(-1) ? null : [current[0],current[1]-1],
            new Set([current[0]+1,current[1]]).has(8) ? null :[current[0]+1,current[1]],
            new Set([current[0]-1,current[1]]).has(-1) ? null :[current[0]-1,current[1]]
        ]
        
        for(let i=0;i<domain.length;i++){
            if(domain[i]!==null){

                
                let newPos = domain[i]
                let newposstr = newPos.join(",")

                if(!visited.has(newposstr)){
                    // console.log(current,newposstr,cost)
                    visited.add(newposstr)
                    let newDir = [Math.abs(current[0]-newPos[0]),Math.abs(current[1]-newPos[1])]
                    
                    if(dir[0]!==newDir[0]||dir[1]!==newDir[1]){
                        cost++
                    }
                    if(newPos[0]===target[0]&&newPos[1]===target[1]){
                        console.log("reached",cost)
                        // return
                    }
                    elephant(newPos,newDir,cost,target)
                    
                }

            }
        }
        
    }

};
