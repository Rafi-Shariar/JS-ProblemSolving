function capitalize(a){

    let words = a.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        words[i] = word[0].toUpperCase() + word.slice(1);
    }

    words = words.join(' ');
    return words;

    
    
}

const res = capitalize('hello world');
console.log(res);
