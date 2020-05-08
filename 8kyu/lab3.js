function sumMix(x){
let resultArr = x.map(item => +item);
 return resultArr.reduce( (sum, current) => sum + current, 0 );
}