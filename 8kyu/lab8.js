function digitize(n) {
 n = `${n}`;
 let result = n.split('').reverse();
for(let i = 0; i < result.length; i++){
  result[i] = +result[i];
}
 return result;
}