/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let n = arr.length;

  // Arrays to store left and right bounds
  let left = new Array(n).fill(0);
  let right = new Array(n).fill(0);

  // Stack to compute left bounds (how far left the element can go)
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    stack.push(i);
  }

  // Reset the stack to compute right bounds (how far right the element can go)
  stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
    stack.push(i);
  }

  // Calculate the result by summing arr[i] * left[i] * right[i]
  let result = 0;

  for (let i = 0; i < n; i++) {
    result += arr[i] * left[i] * right[i];
  }

  return result % (10 ** 9 + 7);
};
