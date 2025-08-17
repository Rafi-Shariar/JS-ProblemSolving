function evenNum(a){

    let result = [];

    for (let i = 0; i < a.length; i++) {
        const num = a[i];

        if( num % 2 == 0) result.push(num);
        
    }

    return result;
}

const arr = [1,2,3,4,5,6];
const res = evenNum(arr);
console.log(res);
