/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let ptr =0;
    let extracted_str =""
    while(true){
        
        if(s[ptr]==="]"){
            s = s.slice(0,ptr)+s.slice(ptr+1); //removing ]
            ptr--;
            extracted_str="";
            while(s[ptr]!=="["){

                extracted_str = s[ptr]+extracted_str;

                s = s.slice(0,ptr)+s.slice(ptr+1);
                ptr--;

            }
            s = s.slice(0,ptr)+s.slice(ptr+1);//removing [ 
            ptr--;
            // stack top now contain digit

            //extracting digit
            let rep_count ="";
            while(!isNaN(parseInt(s[ptr]))){
                rep_count = s[ptr]+rep_count;
                s = s.slice(0,ptr)+s.slice(ptr+1);
                ptr--;

            }
            rep_count = parseInt(rep_count)
            
            extracted_str = extracted_str.repeat(rep_count)
            ptr++
            //adding extracted values to mainstring
            s = s.slice(0,ptr)+extracted_str+s.slice(ptr)

        }
       
        ptr++
        if(ptr>=s.length){
            break
        }
    }
   
    
  return s
 
};
