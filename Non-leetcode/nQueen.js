

let Board = createBoard();
placeQueen(0,Board)



function placeQueen(qno,board){
    if(qno>3){
        dispboard(board)
        console.log("/////////////////////\n")
    }else{

        for(let i=0;i<board[qno].length;i++){
            if(board[qno][i]===0){    
                let neboard = [
                    [...board[0]],
                    [...board[1]],
                    [...board[2]],
                    [...board[3]]
                ]
                mark(row=qno,col=i,mrksts=1,neboard)
                placeQueen(qno+1,neboard)        
            }      
        }
    }
   

    

}
function createBoard(dimn={x:4,y:4}){

    let board = []
    for(let i=0;i<dimn.y;i++){
        temp=[]
        for(let j=0;j<dimn.x;j++){
            temp.push(0)
        }
        board.push(temp)
    }
    return board
}
function mark(row,col,mrksts,board){
    let marker =99
    let queen = row+1
    if(mrksts==-1){marker=0;queen=0}

    for(let i=0;i<board[row].length;i++){

        for(let j=0;j<board.length;j++){
            if(i===row||j===col ){
                board[i][j] = marker
            }
            if(Math.abs(row-i)===Math.abs(col-j)){
                board[i][j]=marker
            }
            if(row===i&& col ===j){
                board[i][j] =queen
                
            }
            
        }
    }
  
    // dispboard(board)
    // console.log("...............");
}
function dispboard(board= [  ] ){

    for(let [index,value] of board.entries()){
        console.log(value);
    }
}
