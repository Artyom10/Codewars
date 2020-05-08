var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
  let sum = [];
  let result = 0;
     if(count < 0){
     return `${count}<0`;
     }
     else if( count == 0){
     return `${count}=0`;
     }
     else{
        for(let i = 0; i < count+1; i++){
         sum[i] = i;
        }
        result = sum.reduce( (all, current) => all += current, 0 );
        sum.map( item => `+${item}`);
        let str = sum.join('+')
        return `${str} = ${result}`;
     }
  };

  return SequenceSum;

})();