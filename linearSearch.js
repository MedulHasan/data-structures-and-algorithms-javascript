const arr = [52, 45, 6, 48, 33, 29];

function linearSearcher(arr, input) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === input) return i;
    }
    return -1;
}

const result = linearSearcher(arr, 481);
console.log(result);
