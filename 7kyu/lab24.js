function countChar(string, char) {
    let count = 0;
  string = string.toLowerCase();
  char = char.toLowerCase();
  let arr = string.split('');
  for( let elem of arr){
    if( elem.includes(char)){
        count++;
    }
  }
  return count;
}