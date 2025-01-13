function solution(k, tangerine) {
const obj = {};

  // 귤의 크기별 갯수 구하기
  for (const t of tangerine) {
    obj[t] = (obj[t] || 0) + 1;
  }

  // 내림차순 정렬
  const sortedObj = Object.values(obj).sort((a, b) => b - a);

  let count = 0;
  let sum = 0;

  for (const value of sortedObj) {
    if (k <= sum) break;

    sum += value;
    count += 1;
  }

  return count;
}