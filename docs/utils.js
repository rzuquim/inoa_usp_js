const util = {
  random: (max, min = 0) => {
    var random = Math.random();
    var randomInt = Math.floor(random * (max - min + 1)) + min;
    return randomInt;
  },
};
