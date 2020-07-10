
var encryptThis = function(text){
  let arr = text.split(' ');
  let result = [];
  for(let i = 0; i < arr.length; i++){
            let arrOfLetter = arr[i].split('');
          let firstLetter = arrOfLetter[0];
          firstLetter = firstLetter.charCodeAt(0);
          if( arr[i].length > 2){
          let secondLetter = arrOfLetter[1];
          let lastLetter = arrOfLetter[arrOfLetter.length - 1];
  result.push(String(firstLetter) + lastLetter + arr[i].slice(2,arr[i].length - 1) + secondLetter);
           }
           else{
            result.push(String(firstLetter) + arr[i].slice(1));
           }
  }
return result.join(' ');
}
