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
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("data")); // Output: "atad"

function mergeArraysWithoutDuplicates(arr1, arr2) {
  const merged = [];
  // Helper function to check if an element exists in the array
  function exists(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }
  // Add elements from the first array
  for (let i = 0; i < arr1.length; i++) {
    if (!exists(merged, arr1[i])) {
      merged.push(arr1[i]);
    }
  }
  // Add elements from the second array
  for (let i = 0; i < arr2.length; i++) {
    if (!exists(merged, arr2[i])) {
      merged.push(arr2[i]);
    }
  }
  return merged;
}

const a = [1, 2, 4, 4];
const b = [2, 3, 4, 5, 5, 6];
console.log(mergeArraysWithoutDuplicates(a, b)); // Output: [1, 2, 4, 3, 5, 6]


### Steps to Use:
1. Create a new repository on GitHub.
2. Add a `README.md` file and paste the above content into it.
3. Add an `index.js` file with the JavaScript code for the solutions.
4. Commit and push the changes to GitHub.

Now, your GitHub repository will display the `README.md` file with the solutions and explanations in a clean and readable format!