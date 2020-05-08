function digits(n) {
  let str = `${n}`;
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if( n % 10 > 1 ){
      count +=1;
    }
  }
  return str.length;
}