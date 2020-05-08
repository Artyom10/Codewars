function sumDigits(number) {
let str = `${number}`;
let arr = str.split('');
if( arr.includes('-')){
  arr.splice(0,1);
}
let sum = arr.reduce( (sumEl, currentEl) => sumEl += Math.abs(currentEl), 0 );
return sum;
}