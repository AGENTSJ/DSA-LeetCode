board=[
    "eatco",
    "xztox",
    "gxodo",
    "sleep"
]

let words = ["sleep","eat","code","socialLife"];
// let words =["sleep"]

for(let i =0;i<words.length;i++){
    findWord(words[i])
}

function findWord(word){

    for(let i=0;i<board.length;i++){

        for(let j=0;j<board[0].length;j++){
            
            if(board[i][j]==word[0]){

                let buffer =[]
                buffer.push(word[0])
                found = explore(word,buffer,i,j)
               
                
            }
            
    
        }
    }
    
    
}

function freedom(row,col){

    let freed = []
  
    if(col+1 <= 4){
        freed.push([row,col+1])
    }
    if(col-1 >= 0){
        freed.push([row,col-1])
    }
    if(row+1 <= 3){
        freed.push([row+1,col])
    }
    if(row-1 >= 0){
        freed.push([row-1,col])
    }
    return freed
}

function explore(word,buffer,row,col){

    
    if(buffer.length===word.length){
        console.log("found",buffer);
        return true
    }

    let movementFreedom = freedom(row,col)
    
    let pointer = buffer.length

    for(let i=0;i<movementFreedom.length;i++){

        let[newrow,newcol]= movementFreedom[i]
        
        if(board[newrow][newcol]===word[pointer]){
            
            let newBuffer = [...buffer]
            newBuffer.push(board[newrow][newcol])
            explore(word,newBuffer,newrow,newcol) 
        }

    }
    return false
    
}

