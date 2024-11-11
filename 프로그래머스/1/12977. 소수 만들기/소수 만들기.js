function solution(nums) {
const arr = [];

  nums.forEach((num, i) => {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        console.log(sum, "sum");

        arr.push(sum);
      }
    }
  });

  const a = arr
    .map((num) => {
      let count = 0;
      const sqrt = Math.floor(Math.sqrt(num));

      for (let i = 2; i <= sqrt; i++) {
        num % i === 0 && count++;
      }

      return count > 0 ? 0 : num;
    })
    .filter((num) => !!num);

  return a.length;
}