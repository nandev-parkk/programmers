function solution(n) {
let currentNum = n;
  const answer = [n];

  while (!answer.includes(1)) {
    currentNum = !(currentNum % 2) ? currentNum / 2 : 3 * currentNum + 1;

    answer.push(currentNum);
  }
  
  return answer;
}