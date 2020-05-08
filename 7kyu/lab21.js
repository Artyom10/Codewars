function getMiddle(s)
{
    let arr = [];
  if(s.length % 2 == 0){
    let strArr = s.split('');
            for(let i = strArr.length/2 - 1; i < (strArr.length/2) + 1; i++){
              arr.push(strArr[i]);
            }
  }
  else if( s.length % 2 != 0){
    let strArr = s.split('');
    arr.push(strArr[Math.ceil(strArr.length / 2 - 1)])
  }
  return arr.join('');
}