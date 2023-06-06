//#1

// let x = 3;
// let y= 9;

// function maxofTwoNumbers(x,y){
//   if( x >= y){
//     return x;
//   }
//   else {
//     return y;
//   }
// }
//   console.log(maxofTwoNumbers(x,y));


//#2
// let x = 1;
// let y = 4;
// let z = 2;

// function maxOfThree(x,y,z){
//     if(x >= y && x >= z){
//     return x;
//     }
//     else if(y >= x && y >= z){
//       return y;
//     }
//     else{
//       return z;
//     }
// }
// console.log(maxOfThree(x,y,z));

//#3
// let x = 'a';

// function isCharAVowel(x){
//   if(x != 'b'){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(isCharAVowel(x));

//#6
// let x = 'x'
// let y ='y'
// let z ='z'

// function argumentsAll(x, y, z){
//   return arguments.length;
// }

// console.log(argumentsAll(x,y,z));

//#8

let x ='giraffe';
let y = 'cat';

function longestStringInArray(x,y){
  if (x.length >= y.length){

    return x.length;
  }
  else {
    return y.length;
  
  }
}

console.log(longestStringInArray(x,y));