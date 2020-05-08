function friend(friends){
  let result = [];
  for( let friend of friends){
   if ( friend.length == 4 ){
    result.push(friend);
   }
  }
  return result;
}