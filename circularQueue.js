let arr = [];
arr.length = 5;

let front = -1;
let rear = -1;
function enqueue(input) {
    if (front === -1 && rear === -1) {
        front = 0;
        rear = 0;
        arr[rear] = input;
    } else if ((rear + 1) % arr.length === front) {
        console.log("Queue is full");
    } else {
        rear = (rear + 1) % arr.length;
        arr[rear] = input;
        console.log(arr);
    }
}
function dequeue() {
    if (front === rear) {
        console.log("Queue is empty");
        return;
    }
    delete arr[front];
    front = (front + 1) % arr.length;
    console.log(arr);
}

enqueue(10);
enqueue(11);
enqueue(12);
enqueue(13);
enqueue(14);
enqueue(15);

/* dequeue();
dequeue();
enqueue(15);
enqueue(16);
enqueue(17); */
