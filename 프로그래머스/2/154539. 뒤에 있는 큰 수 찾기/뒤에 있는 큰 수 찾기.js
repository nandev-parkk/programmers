function solution(numbers) {
  const answer = Array.from({ length: numbers.length }, () => -1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];

    while (stack.length && numbers[stack.at(-1)] < currentNum) {
      answer[stack.pop()] = currentNum;
    }

    stack.push(i);
  }

  return answer;
}