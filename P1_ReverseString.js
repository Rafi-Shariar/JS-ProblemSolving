function stringReverse(a){

    let result = "";
    for(let i=a.length - 1; i >= 0; i--){
        const char = a[i];
        result += char;
    }

    return result;
}

const q = 'hello';
const p = stringReverse(q);
console.log(p);
