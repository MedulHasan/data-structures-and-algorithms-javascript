const arr = [];

function push(input) {
    let top = arr.length;
    arr[top] = input;
    console.log(arr);
}

function pop() {
    let top = arr.length;
    if (top > 0) {
        arr.length = top - 1;
        console.log(arr);
    } else {
        console.log(arr);
    }
}

push(6);
push(5);
push(3);
push(8);
pop();
pop();
pop();
pop();
