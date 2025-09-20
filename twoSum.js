// Two Sum Problem
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

const nums = [2, 7, 11, 15];
const target = 9;

// Solution 1: Brute Force - O(n²) time complexity
const twoSumBruteForce = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// Solution 2: Hash Map - O(n) time complexity
const twoSumHashMap = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
};

// Test both solutions
console.log("Brute Force:", twoSumBruteForce(nums, target)); // [0, 1]
console.log("Hash Map:", twoSumHashMap(nums, target)); // [0, 1]

// Additional test cases
const testCases = [
  { nums: [3, 2, 4], target: 6 },
  { nums: [3, 3], target: 6 },
  { nums: [1, 5, 3, 8], target: 9 },
];

testCases.forEach((test, index) => {
  console.log(`Test ${index + 1}:`, twoSumHashMap(test.nums, test.target));
});
