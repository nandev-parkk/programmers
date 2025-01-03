function solution(arr, intervals) {
       const [[firstStart, firstEnd], [secondStart, secondEnd]] = intervals;

  const answer = [
    ...arr.slice(firstStart, firstEnd + 1),
    ...arr.slice(secondStart, secondEnd + 1),
  ];

  return answer;
}