function maxNum(a){

    a = a.sort();
    return a[ a.length - 1];
}

const arr = [5,1,9,3];
console.log(maxNum(arr));
