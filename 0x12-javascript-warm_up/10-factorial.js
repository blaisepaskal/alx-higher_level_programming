let factorial =1 ; 
let b = process.argv[2];
function calcFactorial(x){
for (let i=1; i<x ; i++){ 
    factorial = factorial *(i+1); 
}
    console.log(factorial);
}
calcFactorial(b);
