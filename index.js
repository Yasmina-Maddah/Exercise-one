var x = prompt("Enter x:");

var currentOdd = 1;

for (let i = 1; i <= x; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += currentOdd + " ";
        currentOdd += 2;
    }
    console.log(row);
}


