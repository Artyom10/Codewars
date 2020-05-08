Array.prototype.numberOfOccurrences = function(number) {
let result = 0;
 for(let elem of this){
    if ( elem === number ){
       result += 1;
    }
 }
 return result;
}