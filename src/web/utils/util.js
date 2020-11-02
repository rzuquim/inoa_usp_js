let util = {
  /**
   * generates a random integer from min to max
   * @param {number} max
   * @param {number} min
   * @param {function} randomFn generates a random num from 0 to 1
   */
  randomInt(max, min = 0, randomFn = Math.random) {
    return Math.floor(randomFn() * (max - min + 1)) + min;
  },
  /**
   * generates an integers array from `start` to `end`
   * @param {number} start
   * @param {number} end
   */
  range(start, end) {
    let numbers = [];
    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  },
  delay(ms = this.randomInt(50, 1000)) {
    console.log(`waiting for ${ms} ms`);
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
};
