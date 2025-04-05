function solution(number, k) {
  const answer = [];

  for (const num of number) {
    while (k > 0 && answer[answer.length - 1] < num) {
      answer.pop();
      k--;
    }

    answer.push(num);
  }

  answer.splice(answer.length - k, k);

  return answer.join("");
}