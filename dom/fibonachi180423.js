'use strict';

function rabbitFibonachi(n){

    let output = [];
    
    if (n === 1){
        output = [0]
    } else if (n === 2){
        output = [0, 1]
    } else {
        output = [0, 1]
        {
            for (let i = 2; i < n; i++){
                output.push(output.at(-2) + output.at(-1));
            }
        }
        return output;
    }
   
    }
 let res = rabbitFibonachi (15);
 console.log(res);