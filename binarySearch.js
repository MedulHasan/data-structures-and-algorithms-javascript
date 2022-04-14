const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const name = ["abiha", "shafayet", "sefa", "medul", "ashik", "anik"];
let left = 0;
let right = arr.length;
function binarySearch(arr, input) {
    while (left <= right) {
        let middleValue = Math.floor((left + right) / 2);
        if (arr[middleValue] === input) {
            return middleValue;
        } else if (arr[middleValue] < input) {
            left = middleValue + 1;
        } else {
            right = middleValue - 1;
        }
    }
    return -1;
}

const result = binarySearch(name, "abihsdsda");
console.log(result);
