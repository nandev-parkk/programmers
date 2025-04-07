function solution(n) {
  const answer = Array.from({ length: n }, (_, i) =>
    Array.from({ length: i + 1 }),
  );

  let x = 0;
  let y = -1;
  let d = n;
  let v = 1;

  while (d > 0) {
    for (let i = 0; i < d; i++) answer[++y][x] = v++;

    for (let i = 0; i < d - 1; i++) answer[y][++x] = v++;

    for (let i = 0; i < d - 2; i++) answer[--y][--x] = v++;

    d -= 3;
  }

  return answer.flat();
}