function solution(k, score) {
  const queue = [];

  const answer = score.map((num, i) => {
    if (queue.length < k) {
      queue.push(num);
    } else if (queue.length === k && queue[0] < num) {
      queue.shift();
      queue.push(num);
    }

    queue.sort((a, b) => a - b);

    return queue[0];
  });

  return answer;
}