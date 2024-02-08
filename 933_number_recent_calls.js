
var RecentCounter = function() {
    this.elms=[]
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.elms.push(t);
    // console.log(this.elms)
    let count=0
    let ptr=this.elms.length-1;
    while(ptr>=0){
        if(t-this.elms[ptr]<=3000){
            // console.log(t,this.elms[ptr],t-this.elms[ptr])
            count++;
            ptr--;
        }else{
            break
        }
    }
    return(count)
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
