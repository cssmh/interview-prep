const getString = (word) => {
  let lastOne = "";
  for (let i = 0; i < word.length; i++) {
    if ((i = word.length - 1)) {
      lastOne = word[i];
    }
    return lastOne;
  }
};

console.log(getString("kalamia"));
