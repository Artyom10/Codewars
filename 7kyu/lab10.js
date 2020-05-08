function findShort(s){
  let arr = s.split(' ');
 let lengthArr = arr.map( (item) => item.length );
 let minLength = Math.min(...lengthArr);
  return minLength;
}