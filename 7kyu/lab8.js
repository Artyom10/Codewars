function getCount(str) {
   let words = str.split('');
  let result = words.filter(el => ('aeiou'.includes(el)));
  return result.length;
}