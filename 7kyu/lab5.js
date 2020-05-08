function getSum( a,b )
{
   let result = [];

 if( a == b ){
  return a;
 }
if( a < b){
 for( let i = a; i <= b; i++){
  result.push(i);
   }
return result.reduce( (sum, current) => sum += current, 0);
    }
if( a > b){
 for( let i = b; i <= a; i++){
  result.push(i);
   }
return result.reduce( (sum, current) => sum += current, 0);
  }
}