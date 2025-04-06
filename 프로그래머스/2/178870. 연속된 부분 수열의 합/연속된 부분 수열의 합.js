function solution(sequence, k) {
  const answer = [];
  let start = 0;
  let end = 1;
  let sum = sequence.slice(start, end).reduce((acc, cv) => acc + cv, 0);

  while (start <= end && end <= sequence.length) {
    if (sum > k) {
      sum -= sequence[start];
      start++;
    } else if (sum < k) {
      sum += sequence[end];
      end++;
    } else {
      // if (start === end - 1) return [start, end - 1];

      answer.push([start, end - 1]);
      sum -= sequence[start];
      start++;
    }
  }

  if (answer.length === 1) return answer[0];

  const sortedAnswer = answer.sort((a, b) => {
    const aLength = a[1] - a[0];
    const bLength = b[1] - b[0];

    return aLength !== bLength ? aLength - bLength : a[0] - b[0];
  });

  return sortedAnswer[0];
}