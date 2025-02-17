function solution(topping) {
  let answer = 0;

  const leftMap = new Map();
  const rightMap = new Map();

  for (let i = 0; i < topping.length; i++) {
    const currentTopping = topping[i];

    leftMap.set(currentTopping, (leftMap.get(currentTopping) || 0) + 1);
  }

  // 해당 토핑의 갯수가 몇개인지 확인
  for (let i = 0; i < topping.length; i++) {
    const currentTopping = topping[i];

    leftMap.set(currentTopping, leftMap.get(currentTopping) - 1);
    rightMap.set(currentTopping, (rightMap.get(currentTopping) || 0) + 1);

    if (!leftMap.get(currentTopping)) leftMap.delete(currentTopping);
    if (!rightMap.get(currentTopping)) rightMap.delete(currentTopping);

    if (leftMap.size === rightMap.size) answer++;
  }

  return answer;
}