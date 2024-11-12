function solution(nums) {
const sumNums = [];

  nums.forEach((num, i) => {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        sumNums.push(sum);
      }
    }
  });

  const answer = sumNums
    .map((num) => {
      let count = 0;
      const sqrt = Math.floor(Math.sqrt(num));

      for (let i = 2; i <= sqrt; i++) {
        if (count > 0) return 0;

        num % i === 0 && count++;
      }

      return count > 0 ? 0 : num;
    })
    .filter((num) => num);

  return answer.length;
}