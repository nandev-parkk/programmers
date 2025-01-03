function solution(arr, intervals) {
  const answer = intervals.flatMap(([start, end]) => {
    const numArr = [];

    for (let i = start; i <= end; i++) {
      numArr.push(arr[i]);
    }

    return numArr;
  });

  return answer;
}