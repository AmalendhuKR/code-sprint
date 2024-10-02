// 02-10-2024

// https://leetcode.com/problems/rank-transform-of-an-array

// Submission #1
var arrayRankTransform = function (arr) {
  let uniqueSortedArray = [...new Set([...arr].sort((a, b) => a - b))];
  let resultArray = new Array(arr.length).fill(0);

  //  rank => number of unique elements less than the item + 1
  arr.forEach((item, index) => {
    const uniqueItemIndex = uniqueSortedArray.findIndex(
      (uniqueItem) => uniqueItem === item
    );
    resultArray[index] = uniqueItemIndex + 1;
  });

  return resultArray;
};

// Submission #2 - Editorial
var arrayRankTransform = function (arr) {
  let sortedArray = [...arr].sort((a, b) => a - b);
  let rank = 1;
  let hashMap = new Array();

  //  hashmap of [element] = rank
  //  rank is iterated if the element is greter than the previous element in the sorted
  sortedArray.forEach((item, index) => {
    if (index > 0 && item > sortedArray[index - 1]) ++rank;
    hashMap[item] = rank;
  });

  arr = arr.map((item) => hashMap[item]);
  return arr;
};
