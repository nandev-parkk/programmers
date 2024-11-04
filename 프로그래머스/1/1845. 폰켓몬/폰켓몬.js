function solution(nums) {
  const answer = [];
  const max = nums.length / 2;

  for (const num of nums) {
    if (answer.length === max) break;
    if (answer.includes(num)) continue;

    answer.push(num);
  }

  return answer.length;
}