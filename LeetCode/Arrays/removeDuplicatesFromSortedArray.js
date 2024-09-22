/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Worst Time Complexity: O(n)
  // Space Complexity: O(1)

  // resultIndex pointer takes the valid values
  // index pointer interates the array

  let resultIndex = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== nums[index + 1]) {
      nums[resultIndex] = nums[index];
      resultIndex++;
    }
  }
  return resultIndex;
};
