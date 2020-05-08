function cubeOdd(arr) {
let sum = 0;
let check  = arr.filter( (item) => typeof item == 'number' );
if( check.length == arr.length){
  arr = arr.map( (item) => item ** 3 );
  for(let i = 0; i < arr.length; i++){
      if( arr[i] % 2 != 0){
       sum += arr[i];
      }
    }
    return sum;
   }
else{
  return undefined;
  }
}