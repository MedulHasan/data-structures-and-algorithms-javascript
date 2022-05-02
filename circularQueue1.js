const queue = [];
queue.length = 3;

let front = -1;
let rear = -1;

function queueFull() {
    if ((front === 0 && rear === queue.length - 1) || rear === front - 1) {
        return true;
    }
    return false;
}

function queueEmpty() {
    if (front === rear) {
        return true;
    }
    return false;
}

function enqueue(item) {
    if (queueFull()) {
        console.log(`${item} is not inserted because of Queue is full`);
        return;
    }
    if (front === -1) {
        front = 0;
    }
    rear = (rear + 1) % queue.length;
    queue[rear] = item;
    console.log(queue);
}

function dequeue() {
    delete queue[front];
    if (queueEmpty()) {
        front = -1;
        rear = -1;
        console.log("Queue is empty");
        return;
    }
    console.log(queue);
    front = (front + 1) % queue.length;
}

dequeue();
enqueue(5);
enqueue(8);
enqueue(4);
enqueue(2);
dequeue();
dequeue();
dequeue();
dequeue();
enqueue(15);

// console.log(queue);
