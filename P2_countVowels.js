function countVowels(a){
    
    let counter = 0;
    a = a.toLowerCase();

    for (let i = 0; i < a.length; i++) {
        const ch = a[i];
        if( ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') counter++;
    }

    return counter;
}

const result = countVowels('programming');
console.log(result);
