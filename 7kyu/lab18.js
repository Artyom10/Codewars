function growingPlant(upSpeed, downSpeed, desiredHeight) {
 let countDays = 0;
 let currentHeight = 0;
 do{
             countDays++  
        currentHeight += upSpeed;
      
        if( currentHeight >= desiredHeight){
          break;
        }

        currentHeight -= downSpeed;
 }while(true);
 return countDays;
}