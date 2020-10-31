let util = {
  randomInt(max, min = 0) {
    let random = Math.random();
    return Math.floor(random * (max - min + 1)) + min;
  },
};
