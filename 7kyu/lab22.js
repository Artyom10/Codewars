function squareDigits(num){
    let str = `${num}`;
  let arr = str.split('').map( (item, index) => +item*+item);
  return Number(arr.join(''));
  
}