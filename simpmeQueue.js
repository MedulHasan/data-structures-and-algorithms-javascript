let arr = [];
arr.length = 4;

let front = 0;
let rear = 0;
function enqueue(input) {
    if (rear <= arr.length - 1) {
        arr[rear] = input;
        console.log(arr);
        rear++;
    } else {
        console.log("overflow");
    }
}

function dequeue() {
    if (front < rear) {
        delete arr[front];
        console.log(arr);
        front++;
    } else {
        console.log("underflow");
    }
}

enqueue(10);
enqueue(11);
enqueue(12);
enqueue(13);

dequeue();
dequeue();
dequeue();
dequeue();
// enqueue(14);
// dequeue();
