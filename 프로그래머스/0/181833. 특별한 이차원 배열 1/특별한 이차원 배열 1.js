function solution(n) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    const arr = [];

    for (let j = 0; j < n; j++) {
      arr.push(i === j ? 1 : 0);
    }

    answer.push(arr);
  }
    
    return answer;
}