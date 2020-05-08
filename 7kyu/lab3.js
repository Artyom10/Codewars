function removeDuplicateWords (s) {
  let arr = s.split(' ');
   arr = Array.from(new Set(arr));
   return arr.join(' ');
}