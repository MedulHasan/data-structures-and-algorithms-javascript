const arr = [10, 5, 2, 8, 7];

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minNum = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minNum]) {
                minNum = j;
            }
        }
        let temp = arr[minNum];
        arr[minNum] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

const result = selectionSort(arr);
console.log(result);
