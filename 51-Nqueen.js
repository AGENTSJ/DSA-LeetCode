/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
    let board = new Array(n).fill(new Array(n+1).join('.'))
    let results =[]
    place(0,board,n,[],results)
    return results

};

function place(placed,board,n,positions,results){
  
    if(placed >=n){
        let res = copyres(board,n)
        results.push(res)

        return
    }
    for(let i=0;i<n;i++){
        
        if(checksafe(positions,[placed,i])){
            let newboard = copyboard(board,n)
    
            newboard[placed][i]='Q'
            let newpostions = [...positions]
            newpostions.push([placed,i])
            place(placed+1,newboard,n,newpostions,results)
        }
    }


}
function copyboard(board,n){

    let newbrd = new Array(n)
    for(let i=0;i<n;i++){
        newbrd[i] = [...board[i]]
    }
    
    return newbrd
}
function copyres(board,n){
    let newbrd = []
    for(let i=0;i<n;i++){
        let temp = [...board[i]].join("")
        newbrd.push(temp)
    }
    return newbrd
}
function checksafe(positions ,currentpos){
    // positions =[  [row,col],..  ]
    // current = [row,col]

    if(positions.length===0){
        return true
    }else{
        for(let i =0;i<positions.length;i++){

            let oldpos = positions[i]
            if(oldpos[0]===currentpos[0]){//row check
                return false
            }else if(oldpos[1]===currentpos[1]){//col check
                return false
            }else if(Math.abs(oldpos[0]-currentpos[0])===Math.abs(oldpos[1]-currentpos[1])){//diagonal check
                return false
            }
        }
        return true
    }
}
function disp(board){
    for(let i=0;i<board.length;i++){
        console.log(board[i])
    }
    console.log("\n\n")
}
