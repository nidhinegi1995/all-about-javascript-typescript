//Break and Continue Statements

// The break and continue statements are used within loops. break exits the loop, while continue skips to the next iteration.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Exits the loop when i equals 5
    }
    console.log(i);
}

//Output: 0, 1, 2, 3, 4

for (let j = 0; j < 10; j++) {
    if (j === 5) {
        continue;  // Skips the rest of the loop when j equals 5
    }
    console.log(j);
}

//Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
// Note: The continue statement skips the current iteration and moves to the next one, so 5 is not printed.