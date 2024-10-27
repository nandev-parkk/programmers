function solution(numbers) {
  const set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (j <= i) continue;

      set.add(numbers[i] + numbers[j]);
    }
  }

  const answer = [...set].sort((a, b) => a - b);

  return answer;
}