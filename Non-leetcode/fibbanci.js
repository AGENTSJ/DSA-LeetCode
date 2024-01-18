

let start = [1,2,1]

let above = [0,1,0]

for(let i=0;i<5;i++){
    let arr = []
    for(let i=0;i<above.length-1;i++){
        arr.push(above[i]+above[i+1])
    }
    console.log(arr);
    above = [0,...arr,0]
}
    
    

