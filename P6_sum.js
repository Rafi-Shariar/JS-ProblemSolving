function sum(a){
    let cal = 0;

    for (let i = 0; i < a.length; i++) {
        const num = a[i];
        cal += num;
    }

    return cal;
}

const arr = [1,2,3,4,5];
console.log( sum(arr) );
