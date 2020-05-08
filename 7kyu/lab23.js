function divisibleByThree(str){
let sum = str.split('').reduce( (sum, currentItem) => sum += +currentItem, 0);
    if( sum % 3 == 0){
      return true;
    }
    else{
      return false;
    }
}