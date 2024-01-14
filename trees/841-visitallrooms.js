/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visitable =[0]
    let visited = new Set()
    visited.add(0)
    visit(rooms,0,visited,visitable)
    if(visited.size!==rooms.length){
        return false
    }
    return true
   
};



function visit(rooms,current,visited,visitable){
    
    let keys = rooms[current]

    for(let i=0;i<keys.length;i++){
        
        if(!visited.has(keys[i])){

            visited.add(keys[i])
            visit(rooms,keys[i],visited,visitable)
        }
    }
}