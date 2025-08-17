function removeDuplicates(a){
    const result = new Set(a);
    return result;
}

const arr = [1,2,2,3,4,4];
const result = removeDuplicates(arr);
console.log(result);

