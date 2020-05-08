function oddOrEven(array) {
     let result = array.reduce( (sum, current) => sum += current, 0);
  if( result % 2 == 0){
    return `even`;
  }
  else{
    return 'odd';
  }
}