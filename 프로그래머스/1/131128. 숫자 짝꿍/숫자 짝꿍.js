function solution(X, Y) {
   const xArr = X.split("");
  const yArr = Y.split("");
  const map = new Map();

  for (let i = 0; i < 10; i++) {
    const a = xArr.filter((x) => +x === i).length;
    const b = yArr.filter((y) => +y === i).length;

    if (!a || !b) continue;

    map.set(i, Math.min(a, b));
  }

  if (!map.size) {
    return "-1";
  } else if (map.size === 1 && [...map.keys()][0] === 0) {
    return "0";
  } else {
    const answer = [];

    map.forEach((value, key) => {
      for (let i = 1; i <= value; i++) {
        answer.push(key);
      }
    });

    return answer.sort((a, b) => b - a).join("");
  }
}