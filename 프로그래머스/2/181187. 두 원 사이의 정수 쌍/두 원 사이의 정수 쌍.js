function solution(r1, r2) {
  let count = 0;

  for (let x = 1; x <= r2; x++) {
    const minHeight = Math.ceil(Math.sqrt(r1 ** 2 - x ** 2)) || 0;
    const maxHeight = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));

    count += maxHeight - minHeight + 1;
  }

  return count * 4;
}