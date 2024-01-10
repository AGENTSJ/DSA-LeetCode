#include<stdio.h>
#include<math.h>
#include<time.h>


void Place(int board[9][9], int Position[2]);
void dispBoard(int board[9][9]);
int nextPosition(int board[9][9],int Position[2]);
int Constraint(int board[9][9],int Position[2],int val);



int main(){
    
    int sudokuBoard[9][9] = {
        {0, 3, 4, 2, 9, 8, 5, 6, 7} , 
        {2, 0, 9, 0, 0, 7, 1, 8, 3} , 
        {5, 7, 8, 1, 0, 3, 9, 4, 2} , 
        {3, 5, 7, 9, 8, 4, 2, 1, 6} , 
        {4, 2, 1, 7, 3, 0, 0, 9, 5} , 
        {9, 0, 6, 0, 2, 1, 3, 7, 4} , 
        {6, 1, 2, 3, 7, 9, 4, 5, 8} , 
        {7, 9, 0, 8, 4, 5, 6, 0, 1} , 
        {8, 4, 5, 0, 1, 0, 7, 3, 9}
    };
    
   
    int Position[2] = {0, 0};
    Place(sudokuBoard, Position);
}

void Place(int board[9][9], int Position[2]){
    

    

    if(Position[0] == 9){
        dispBoard(board);
        
    return;

        }

    if(board[Position[0]][Position[1]] != 0){
        nextPosition(board, Position);
        Place(board, Position);
    }else{
        for(int i=1; i<10; i++){
            if(Constraint(board, Position, i)){
                board[Position[0]][Position[1]] = i;
                int nextPos[2] = {Position[0], Position[1]};
                nextPosition(board, nextPos);
                Place(board, nextPos);
                board[Position[0]][Position[1]] = 0;
            }
        }
    }


    
}

int Constraint(int board[9][9],int Position[2],int val){
    int row = Position[0];
    int col = Position[1];
    int cubeRowStart = (row/3)*3;
    int cubeColStart = (col/3)*3;

    for(int i=0; i<9; i++){
        if(board[row][i] == val || board[i][col] == val){
            return 0;
        }
    }

    for(int i=cubeRowStart; i<cubeRowStart+3; i++){
        for(int j=cubeColStart; j<cubeColStart+3; j++){
            if(board[i][j] == val){
                return 0;
            }
        }
    }

    return 1;
}

int nextPosition(int board[9][9],int Position[2]){
    Position[1]++;
    if(Position[1] == 9){
        Position[0]++;
        Position[1] = 0;
    }
    return Position[0] != 9;
}

void dispBoard(int board[9][9]){
    for(int i=0; i<9; i++){
        for(int j=0; j<9; j++){
            printf("%d  ",board[i][j]);
        }
        printf("\n");
    }
    printf("/////////////////////////////////\n");
    
}