function solution(numer1, denom1, numer2, denom2) {
  let lcm = 1;
  let topNum = numer1 * denom2 + numer2 * denom1;
  let bottomNum = denom1 * denom2;
  const result = [];

  for (let i = 1; i <= topNum; i++) {
    if (topNum % i === 0 && bottomNum % i === 0) {
      lcm = i;
    }
  }

  result[0] = topNum / lcm;
  result[1] = bottomNum / lcm;

  return result;
}

solution(1, 2, 3, 4);
