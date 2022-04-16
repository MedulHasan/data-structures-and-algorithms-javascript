const arr = [16, 37, 13, 36, 77, 5, 14, 9];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i--;
            }
        }
    }
    return arr;
}

const result = insertionSort(arr);
console.log(result);
