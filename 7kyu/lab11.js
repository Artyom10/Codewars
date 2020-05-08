function descendingOrder(n){
 n = `${n}`;
    let arr = n.split('');
    arr = arr.sort( (a,b) => b - a);
    n = arr.join('');
    return +n;
}