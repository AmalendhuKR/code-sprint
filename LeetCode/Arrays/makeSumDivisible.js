var minSubarray = function (nums, p) {
  const totalSum = nums.reduce((a, b) => a + b, 0);

  const target = totalSum % p;
  if (target === 0) return 0;

  let currentSum = 0;
  let minLength = nums.length;

  let prefixMod = new Map();
  prefixMod.set(0, -1);

  nums.forEach((item, index) => {
    currentSum += item;
    let currentMod = currentSum % p;
    let targetMod = (currentMod - target + p) % p;

    if (prefixMod.has(targetMod)) {
      minLength = Math.min(minLength, index - prefixMod.get(targetMod));
    }

    prefixMod.set(currentMod, index);
  });

  return minLength === nums.length ? -1 : minLength;
};
