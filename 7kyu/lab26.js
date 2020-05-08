function longest(s1, s2) {
  let str = s1 + s2;
  let arr = str.split('');
  arr.sort();
  return Array.from(new Set(arr)).join('');
}