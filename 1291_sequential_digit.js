/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let room ="123456789";

    let lowstr = low.toString()
    let winsize = lowstr.length;
    let winstart =0;
    let res =[]
    let curr =null;
    while(true){
        console.log(winstart,winsize)
        curr = parseInt(room.slice(winstart,winstart+winsize))
        console.log(res,curr)

        if(curr>=low){

            if(curr>high){
                break
            }
            
            res.push(curr);

            if(winsize===9){
                
                break
            }
            winstart++;
            if(winstart+winsize >room.length){
                winsize=winsize+1;
                winstart = 0;
            }


        }else{
            winstart++
            if(winsize===9){
                break
            }
            if(winstart+winsize >room.length){
                winsize=winsize+1;
                winstart = 0;
            }
        }

       
        
    }
    return res


};
