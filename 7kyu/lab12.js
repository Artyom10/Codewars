function minValue(values){
  values = values.sort( (a,b) => a - b);
  let result = Array.from(new Set(values));
  result = result.join('');
  return +result;
}