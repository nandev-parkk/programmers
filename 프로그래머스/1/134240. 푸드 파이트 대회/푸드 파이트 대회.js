function solution(food) {
  const answer = [0];

  for (let i = food.length - 1; i > 0; i--) {
    for (let j = 1; j <= Math.floor(food[i] / 2); j++) {
      answer.unshift(i);
      answer.push(i);
    }
  }

  return answer.join("");
}