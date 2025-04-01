function solution(queue1, queue2) {
  const combineQueue = [...queue1, ...queue2];
  const halfTotal = combineQueue.reduce((acc, cv) => acc + cv, 0) / 2;

  let start = 0;
  let end = queue1.length;

  let answer = 0;
  let sum = combineQueue.slice(start, end).reduce((acc, cv) => acc + cv, 0);

  while (start < end) {
    if (sum === halfTotal) return answer;

    if (sum < halfTotal) {
      sum += combineQueue[end];
      end++;
    } else {
      sum -= combineQueue[start];
      start++;
    }

    answer++;
  }

  return -1;
}