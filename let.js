let val = 1;

function printVal() {
    console.log(val); // 1
    val = 2;
    console.log(val); // 2

    let val2 = 3;
    console.log(val2); // 3

    if (1 == 1) {
        console.log(val2); // 3
        let val3 = 4;
        console.log(val3); // 4
    }
    console.log(val3) //ReferenceError: val3 is not defined
}

printVal();

console.log(val); // 2
console.log(val2); // ReferenceError: val2 is not defined

let val = 5; // SyntaxError: Identifier 'val' has already been declared
