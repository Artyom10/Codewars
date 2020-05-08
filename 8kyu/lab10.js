function arrayPlusArray(arr1, arr2) {
 let sum = 0;
 for( let elemsFirst of arr1 ){
  sum += elemsFirst;
 } 
 for(let elemsSecond of arr2){
  sum += elemsSecond;
 }
 return sum;
}