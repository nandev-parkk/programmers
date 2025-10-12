function solution(n, stations, w) {
  let [start, end] = [1, 1];
  let answer = 0;
  // const oneWayRange = w + 1;
  const twoWayRange = 2 * w + 1;

  for (const station of stations) {
    end = station - w - 1;

    if (end >= start) {
      const length = end - start + 1;

      if (length <= twoWayRange) answer += 1;
      else answer += Math.ceil(length / twoWayRange);
    }

    start = station + w + 1;
  }

  // 끝 부분 처리
  if (start <= n) {
    const length = n - start + 1;
    answer += Math.ceil(length / twoWayRange);
  }

  return answer;
}