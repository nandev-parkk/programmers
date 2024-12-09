function solution(n) {
     const nums = Array.from({ length: n }, (_, i) => i + 1);
  const sqrt = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= sqrt; i++) {
    for (let j = 2; i * j <= n; j++) {
      nums[i * j - 1] = NaN;
    }
  }

  return nums.filter((num) => !isNaN(num) && num !== 1).length;
}