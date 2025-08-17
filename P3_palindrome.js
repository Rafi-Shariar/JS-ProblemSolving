function palindrome(a){

    let i = 0;
    let j = a.length - 1;

    while(i<j){
        let ch1 = a[i];
        let ch2 = a[j];

        if(ch1 !== ch2) return false;
        i++;
        j--;
    }

    return true;
}

const result = palindrome('madam');
if(result) console.log('true');
else console.log('false');

