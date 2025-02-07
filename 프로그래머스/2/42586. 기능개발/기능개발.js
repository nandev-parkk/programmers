function solution(progresses, speeds) {
  const answer = [];

  const days = progresses.map((progress, i) => {
    let count = 0;

    while (progress < 100) {
      progress += speeds[i];
      count++;
    }

    return count;
  });

  let start = 0;
  let end = 1;

  while (start < days.length) {
    if (days[start] >= days[end]) {
      end++;
    } else {
      answer.push(days.slice(start, end).length);
      start = end;
      end++;
    }
  }

  return answer;
}