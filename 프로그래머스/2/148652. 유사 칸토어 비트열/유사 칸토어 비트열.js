function solution(n, l, r) {
  if (!n) return 1;

  // blockSize는 하나의 블럭 사이즈를 뜻함
  // n이 2인 경우 5 ** (2 - 1)이므로 5 => 11011 | 11011 | 00000 | 11011 | 11011
  // n이 3인 경우 5 ** (3 - 1)이므로 25 => 1101111011000001101111011 | 1101111011000001101111011 | 0000000000000000000000000 | 1101111011000001101111011 | 1101111011000001101111011
  const blockSize = 5 ** (n - 1);
  let result = 0;

  for (let i = 0; i < 5; i++) {
    // 현재 블록의 범위
    const start = i * blockSize + 1;
    const end = (i + 1) * blockSize;

    // l, r이 포함되지 않으면 패스
    if (l > end || r < start) continue;

    // 세번째 블록인 경우 항상 0이므로 패스
    if (i === 2) continue;

    // 블럭을 또 5개로 쪼갰을 때의 시작 지점과 종료 지점 구하기
    // 만약 n = 3, l = 30, r = 40인 경우 2번째 블럭(26 ~ 50)의 범위에 들어옴
    // 26을 1로 했을 때 30은 5, 40은 15
    const newStart = Math.max(l, start) - start + 1;
    const newEnd = Math.min(r, end) - start + 1;

    result += solution(n - 1, newStart, newEnd);
  }

  return result;
}