function capitalize(str){
  let arr = str.split('');
  let evenBig = arr.map( (letter, index) => (index % 2 == 0) ? letter.toUpperCase(): letter.toLowerCase() ).join('');
  let evenSmall = arr.map( (letter, index) => (index % 2 == 1) ? letter.toUpperCase(): letter.toLowerCase() ).join('')
  return [evenBig, evenSmall];
}