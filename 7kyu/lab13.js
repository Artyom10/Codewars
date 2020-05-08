function filter_list(l) {
let resultArr = [];
 for(let i = 0 ; i < l.length; i++){
  if( typeof l[i] == 'number'){
    resultArr.push(l[i]);
  }
 }
 return resultArr;
}