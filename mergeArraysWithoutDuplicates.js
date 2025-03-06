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
console.log(mergeArraysWithoutDuplicates(a, b));
