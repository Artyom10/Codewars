function XO(str) {
  let countX = 0;
  let countO = 0;
  str = str.toLowerCase();
    let arr = str.split('');
    for(let i = 0; i < arr.length; i ++){
      if( arr[i] == 'x' {
            countX +=1;
      }
      else if( arr[i] == 'o'{
      countO += 1;
      }
    }
    return countX == countO ? true : false;
}