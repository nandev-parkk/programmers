function solution(stones, k) {
  let [left, right] = [1, 200000000];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let count = 0;

    // stones의 각 원소에서 mid를 빼는 코드
    for (const stone of stones) {
      if (stone - mid <= 0) count++;
      else count = 0;

      if (count === k) break;
    }

    if (count >= k) right = mid - 1;
    else left = mid + 1;
  }

  return left;
}