

board = createBoard();


function createBoard(dimn={x:4,y:4}){

    board = []
    for(let i=0;i<dimn.y;i++){
        temp=[]
        for(let j=0;j<dimn.x;j++){
            temp.push(0)
        }
        board.push(temp)
    }
    return board
}

function placeQueen(qno,Board=[]){

    for(let i=0;i<Board[qno].length;i++){

        if(Board[qno][i]==0){

            Board[qno][i] = qno
            if(qno==Board[0].length-1){dispboard(Board);break}
            mark(qno,i,stus=1,Board)

            placeQueen(qno=qno+1,Board = Board)

            Board[qno][i]=0
            mark(qno,i,stus=-1)
        }
    }
}

function mark(row,col,stus,Board){

    let marker = 99
    if(stus=-1){marker = 0}

    //marking diagonals
    flag =1
    max_col = Board.length-1
    max_row = Board[0].length-1

    cur_row = row+1
    cur_col = col+1
    //moving down diagonaly right
    while(cur_row<=max_row && cur_col<=max_col){
        
        Board[cur_row][cur_col] = marker
        cur_row++;
        cur_col++;
    }
    //moving up diagonaly left
    cur_row = row-1
    cur_col = col-1
    while(cur_row>=0&&cur_col>=0){
        
        Board[cur_row][cur_col]= marker
        cur_col--;
        cur_row--;
    }
    
    
}

function dispboard(board= [  ] ){

    for(let [index,value] of board.entries()){
        console.log(value);
    }
}
