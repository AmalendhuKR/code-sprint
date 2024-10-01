// 01-10-2024
// 1497. Check If Array Pairs Are Divisible by k
// https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k

var canArrange = function (arr, k) {
  let freqMap = new Array(k).fill(0);

  // hashmap is kept between the array indexes and the values
  // remainders are the indexes
  arr.forEach((item) => {
    let remainder = item % k;
    if (remainder < 0) {
      remainder += k;
    }
    freqMap[remainder]++;
  });

  // if the remainder is 0 -> should be even
  if (freqMap[0] % 2 !== 0) {
    return false;
  }

  // for other remainders, check the count with the complimentary remainder i and k-i
  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (freqMap[i] !== freqMap[k - i]) return false;
  }

  return true;
};
