class Test{
    constructor(){
       
        this.tesArrays = [[5, -3, 2, 8, -1],[4, 2, 2, 8, 3],[1, 5, 9, 2, 3],[5,2,9,4]]
    }
    test(func){
        console.log(func.name)
        for(let i of this.tesArrays ){

            let res = func(i);
            i.sort((a,b)=>a-b)
            // console.log(i,res)
            for(let j=0;j<i.length;j++){
                // console.log(i[j],res[j])
                if(i[j]!==res[j]){
                    return false;
                }
            }
            
        }
        return true;
    }
}


let test = new Test()

function bubbleSort(arr){
    
    for(let i=0;i<arr.length;i++){
        
        for(let j =0;j<arr.length-i-1;j++){
            
            if(arr[j]>arr[j+1]){
                let tem = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tem;
            }
            
        }
    }
    // console.log(arr)
    return arr;
}
// console.log(test.test(bubbleSort))

function selectionSort(arr){
    
    for(let i=0;i<arr.length;i++){
        let min =arr[i];
        let minidx = i;
        for(let j=i;j<arr.length;j++){
            if(min>arr[j]){
                min = arr[j];
                minidx = j;
            }
        }
        let tem= arr[i];
        arr[i] = min;
        arr[minidx] = tem;
    }
    // console.log(arr)
    return arr
}
// console.log(test.test(selectionSort))

function insertionSort(arr){
    let lastidx =0;
    let res=[]
    res.push(arr[0])

    for(let i=1;i<arr.length;i++){
               
        // console.log("idx",lastidx)
        insert(res,lastidx,arr[i]);
        lastidx++;

    }
   
    return res;

    function insert(res,lastidx,elm){

        let ptr =lastidx;

        while(ptr>=0){
            // console.log(res,ptr,elm);
            if(res[ptr]<=elm){
             
                res.splice(ptr+1,0,elm)
                return
                
            }
            ptr--;
        }
        res.unshift(elm)
    }
}
// console.log(test.test(insertionSort))