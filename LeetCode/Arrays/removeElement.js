// Remove Element
// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3247/

var removeElement = function (nums, val) {
  let length = nums.length;
  for (let index = 0; index < length; index++) {
    if (nums[index] === val) {
      // if the val is found in the iteration, remove it.
      nums.splice(index, 1);
      // reduce the iteration count
      length--;
      // decrease the index by 1, to capture the adjacent val
      index--;
    }
  }
  // debugging
  console.log(nums);

  return nums.length;
};

const param1 = [3, 2, 2, 3];
const param2 = 3;
removeElement(param1, param2);
