const a = [1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5];

const removeDuplicates = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

// New component using Set
const removeDuplicatesSet = (arr) => {
  return Array.from(new Set(arr));
};

console.log(removeDuplicates(a));
console.log(removeDuplicatesSet(a));
