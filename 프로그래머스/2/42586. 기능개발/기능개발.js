function solution(progresses, speeds) {
  const answer = [];

  const ca = progresses.map((progress, i) => {
    let count = 0;

    while (progress < 100) {
      progress += speeds[i];
      count++;
    }

    return count;
  });

  let start = 0;
  let end = 1;

  while (start < ca.length) {
    if (ca[start] >= ca[end]) {
      end++;
    } else {
      answer.push(ca.slice(start, end).length);
      start = end;
      end++;
    }
  }

  return answer;
}