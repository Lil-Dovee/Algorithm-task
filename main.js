// QUESTION 1: CONVERT FAHRENHEIT TO CELSIUS

function convertFahrToCelsius(f){

    if (typeof f === 'object' && !Array.isArray(f)){
        // console.log(`${JSON.stringify(f)} is not a valid number but an ${typeof f} `)
        return (`${JSON.stringify(f)} is not a valid number but an ${typeof f} `)
    }else{
        if(typeof f === 'boolean'){
            // console.log(`${JSON.stringify(f)} is not a valid number but a ${typeof f} `)
            return (`${JSON.stringify(f)} is not a valid number but a ${typeof f} `)
        } else if (Array.isArray(f)=== true){
            // console.log(`${JSON.stringify(f)} is not a valid number but an array `)
            return (`${JSON.stringify(f)} is not a valid number but an array `)
        } else if(isNaN(f)){
            // console.log(`${JSON.stringify(f)} is not a valid number but a ${typeof f} `)
            return (`${JSON.stringify(f)} is not a valid number but a ${typeof f} `)
        }else if(f === ("")){
            // console.log(`${JSON.stringify(f)} is not a valid number but a ${typeof f} `)
            return (`${JSON.stringify(f)} is not a valid number but a ${typeof f} `)
        }
        else if(f == null){
            // console.log(`${JSON.stringify(f)} is not a valid number but a ${typeof f} `)
            return (`${JSON.stringify(f)} is not a valid number but a ${typeof f} `)
        }
        else{
            
            let answer = (f - 32 *5/9).toFixed(4);
            return answer
            // console.log(answer)
        }
    }
     
}

convertFahrToCelsius()













// QUESTION 2:  WRITE A FUNCTION checkYuGiOh

function checkYuGiOh (n){
    let num = JSON.stringify(n)
    let outcome = [];
        if(Array.isArray(n) === true){
        // console.log("invalid parameter" + ":" + num);
        return("invalid parameter" + ":" + num);
    }else{
        if(typeof n === 'boolean'){
            // console.log("invalid parameter" + ":" + num);
            return("invalid parameter" + ":" + num);   
        } else if(n == null){
            // console.log("invalid parameter" + ":" + num);
            return("invalid parameter" + ":" + num);
        } else if(typeof n === 'object'){
            // console.log("invalid parameter" + ":" + num);
            return("invalid parameter" + ":" + num);
        } else if(isNaN(n)===true){
            // console.log("invalid parameter" + ":" + num);
            return("invalid parameter" + ":" + num);
        }else if( n === ""){
            // console.log("invalid parameter" + ":" + num);
            return("invalid parameter" + ":" + num);
        }else {
            let num = Number(n)
    for(let i = 1; i <= num; i++){
        if (i % 2 ==0 && i % 3 !==0 && i % 5 !==0){
            outcome.push('yu')
        } else if (i % 3 ==0 && i % 2 !==0 && i % 5 !==0){
        outcome.push('gi')
        }else if(i % 5 ==0 && i % 2 !==0 && i % 3 !==0){
        outcome.push('oh')
        }else if(i % 2 ==0 && i % 3 ==0 && i % 5 !==0){
            outcome.push('yu-gi') 
        }else if(i % 2 ==0 && i % 5 ==0 && i % 3 !==0){
            outcome.push('yu-oh')
        }else if(i % 3 ==0 && i % 5 ==0 && i % 2 !==0){
            outcome.push('gi-oh')
        }else if(i % 2 ==0 && i % 3 ==0 && i % 5 ==0){
            outcome.push('yu-gi-oh')
        }else{
        outcome.push(i)
    }
}
  }
}
// console.log(outcome)
return outcome

}
checkYuGiOh();