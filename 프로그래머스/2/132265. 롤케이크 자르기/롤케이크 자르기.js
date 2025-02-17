function solution(topping) {
  let answer = 0;

  const leftMap = new Map();
  const rightSet = new Set();

  for (let i = 0; i < topping.length; i++) {
    const currentTopping = topping[i];

    leftMap.set(currentTopping, (leftMap.get(currentTopping) || 0) + 1);
  }

  // 해당 토핑의 갯수가 몇개인지 확인
  for (let i = 0; i < topping.length; i++) {
    const currentTopping = topping[i];

    leftMap.set(currentTopping, leftMap.get(currentTopping) - 1);
    rightSet.add(currentTopping);

    const leftTopping = [...leftMap.entries()]
      .map(([topping, num]) => (num ? topping : ""))
      .filter((v) => v);

    if (leftTopping.length === rightSet.size) answer++;
  }

  return answer;
}