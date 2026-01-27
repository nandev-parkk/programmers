function solution(n, times) {
  // 문제의 관점 ** n명을 모두 심사하는데 최소 몇분이 필요할까 **
  // times를 오름차순 정렬
  // times.sort((a, b) => a - b);

  // 입국 심사하는데 걸리는 최소 시간과 최대 시간
  // 이 사이에 정답이 있다 이 말이야!!!
  let min = 1;
  let max = Math.min(...times) * n;
  // let max = times[times.length - 1] * n;

  while (min <= max) {
    // 현재 최소 시간과 최대 시간의 중앙값을 구함
    const mid = Math.floor((min + max) / 2);

    // cv: times의 원소 -> 한 심사관이 입국자 1명을 처리하는데 걸리는 시간
    // mid / cv: mid 시간 동안 해당 심사관이 처리할 수 있는 사람 수(31 / 7인 경우 4)
    // sum: mid 시간 안에 각 심사관이 입국 처리 가능한 사람 수를 더한 값
    const sum = times.reduce((acc, cv) => acc + Math.floor(mid / cv), 0);

    // sum이 n보다 작은 경우 시간이 더 필요하기 때문에 최소 시간을 mid + 1로 변경
    // sum이 n보다 큰 경우 시간이 남기 때문에 최대 시간을 mid - 1로 변경
    if (sum < n) min = mid + 1;
    else max = mid - 1;
  }

  return min;
}