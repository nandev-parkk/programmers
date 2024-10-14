function solution(a, b, c, d) {
  const nums = [a, b, c, d];

  const numCount = {};

  for (const num of nums) {
    numCount[num] ? (numCount[num] = numCount[num] + 1) : (numCount[num] = 1);
  }

  const sortedKeys = Object.entries(numCount)
    .sort(([, a], [, b]) => {
      return b - a;
    })
    .reduce((acc, [key]) => [...acc, +key], []);

  let answer;

  if (sortedKeys.length === 1) {
    /** 네개가 모두 같은 경우 1111 * p */
    answer = +sortedKeys * 1111;
  } else if (sortedKeys.length === 2) {
    const firstKey = sortedKeys[0];
    const secondKey = sortedKeys[1];

    if (numCount[firstKey] === numCount[secondKey]) {
      /** 세개(p)가 같고 하나(q)가 다른 경우 (10 * p + q) * 2 */
      answer = (firstKey + secondKey) * Math.abs(firstKey - secondKey);
    } else {
      /** 두개(p, q)씩 같은 경우 (p + q) * |p - q| */
      answer = (10 * firstKey + secondKey) ** 2;
    }
  } else if (sortedKeys.length === 3) {
    const secondKey = sortedKeys[1];
    const thirdKey = sortedKeys[2];

    /** 두개(p)가 같고 나머지(q, r)가 다른 경우 q * r */
    answer = secondKey * thirdKey;
  } else if (sortedKeys.length === 4) {
    /** 모두 다른 경우 가장 작은 숫자 */
    answer = Math.min(...sortedKeys);
  }

  return answer;
}