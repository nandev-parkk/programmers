function solution(data, col, row_begin, row_end) {
  // 1. 정렬
  const sortedData = data.sort(
    (a, b) => a[col - 1] - b[col - 1] || b[0] - a[0],
  );

  // 2. 나머지들의 합 구하기
  const idx = [];
  for (let i = row_begin; i <= row_end; i++) idx.push(i);

  const mappedData = sortedData
    .slice(row_begin - 1, row_end)
    .map((tuple, i) => tuple.reduce((acc, cv) => (cv % idx[i]) + acc, 0));

  // 3. xor
  const answer = mappedData.reduce((acc, cv) => acc ^ cv, 0);

  return answer;
}