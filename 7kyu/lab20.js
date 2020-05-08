function getSumOfDigits(integer) {
let str = `${integer}`;
  let result = str.split('').reduce( (sum, currentItem) => sum += +currentItem, 0);
  return result;
}