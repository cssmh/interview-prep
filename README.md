# JavaScript Solutions for Common Interview Questions

This repository contains solutions to common JavaScript interview questions. Each solution avoids using built-in functions and relies on loops and basic logic.

## **Question 1: Get the Last Character from a Word**

### Problem:

Given a word (e.g., `"student"`), extract the last character (`"t"`).

### Solution:

```javascript
const getString = (word) => {
  let lastOne = "";
  for (let i = 0; i < word.length; i++) {
    if ((i = word.length - 1)) {
      lastOne = word[i];
    }
    return lastOne;
  }
};

console.log(getString("student")); // Output: "t"
console.log(getString("number")); // Output: "r"
console.log(getString("practice")); // Output: "e"

const numberForSum = (number) => {
  let totalSum = 0;
  const numStr = number.toString();
  for (let i = 0; i < numStr.length; i++) {
    totalSum += parseInt(numStr[i]);
  }
  return totalSum;
};

console.log(numberForSum(12)); // Output: 3
console.log(numberForSum(262)); // Output: 10
console.log(numberForSum(252)); // Output: 9

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("data")); // Output: "atad"
console.log(reverseString("string")); // Output: "gnirts"
console.log(reverseString("all")); // Output: "lla"

How It Works
Initialization:
let reversed = "": This initializes an empty string to store the reversed result.

Loop:
The for loop iterates through the string in reverse order:

let i = str.length - 1: Start from the last character of the string.

i >= 0: Continue the loop as long as i is greater than or equal to 0.

i--: Decrement i after each iteration to move backward through the string.

Appending Characters:
reversed += str[i]: In each iteration, the character at index i is appended to the reversed string.

Return:
After the loop finishes, the reversed string contains the reversed input string, which is then returned.

Why let i = str.length - 1; i >= 0; i-- Works
let i = str.length - 1:

In JavaScript, strings are zero-indexed. This means the first character is at index 0, and the last character is at index str.length - 1.

For example, in the string "data":

Index 0: 'd'

Index 1: 'a'

Index 2: 't'

Index 3: 'a'

So, str.length - 1 gives the index of the last character (3 in this case).

i >= 0:

This ensures the loop continues until it reaches the first character (index 0).

i--:

This moves the loop backward, from the last character to the first.

Why let i = str.length; i > 0; i-- Does Not Work
let i = str.length:

This starts the loop at an index that is out of bounds. For the string "data", str.length is 4, but the valid indices are 0 to 3.

Accessing str[4] would result in undefined.

i > 0:

This condition stops the loop when i becomes 0, meaning the first character (at index 0) is never processed.

Result:

The loop would miss the first character of the string, and the reversed string would be incomplete.

For example, with "data":

The loop would process indices 3, 2, and 1, but skip index 0.

The result would be "ata" instead of "atad"

Correct vs Incorrect Loop Comparison
Correct Loop:
javascript
Copy
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
Processes indices: 3, 2, 1, 0.

Result: "atad".

Incorrect Loop:
javascript
Copy
for (let i = str.length; i > 0; i--) {
  reversed += str[i];
}
Processes indices: 4 (invalid), 3, 2, 1.

Result: undefined + "ata" → "ata".

Key Takeaway
Always start the loop from str.length - 1 to access the last character.

Use i >= 0 to ensure the first character (index 0) is included in the loop.

Starting from str.length or using i > 0 will either cause an out-of-bounds error or skip the first character.

const mergeArraysWithoutDuplicates = (...arrays) => {
  const uniqueArray = [];

  for (const arr of arrays) {
    for (const num of arr) {
      if (!uniqueArray.includes(num)) {
        uniqueArray.push(num);
      }
    }
  }
  return uniqueArray;
};

const a = [1, 2, 4, 4];
const b = [2, 3, 4, 5, 5, 6];

console.log(mergeArraysWithoutDuplicates(a, b)); // Output: [1, 2, 4, 3, 5, 6]
```
