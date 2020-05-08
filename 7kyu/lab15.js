function twoOldestAges(ages){
let resultArr = ages.sort( (a,b) => a - b);
 let arr = resultArr.splice(resultArr.length-2);
 return arr;
}