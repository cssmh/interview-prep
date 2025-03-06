const numberForSum = (number) => {
  let totalSum = 0;
  const numStr = number.toString();
  for (let i = 0; i < numStr.length; i++) {
    totalSum += parseInt(numStr[i]);
  }
  return totalSum;
};

console.log(numberForSum(12));
