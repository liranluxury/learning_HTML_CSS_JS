function isNumberOdd (number) {
   if(number%2 ===0) {
    return false;
   } else {
    return true;
   }
}
console.log(isNumberOdd(9));


function factorial(count){
    let result = 1;
    for(i=1; i <=count; i++){
        result=result*i;
    }return result;
}

console.log(factorial(12));


function changeSpaceToUnderscore(text){
    const resultText = text.replace(/ /g, "_");
    return resultText;
}
console.log(changeSpaceToUnderscore('My name is Liran'));
