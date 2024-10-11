function solution(a, b, c, d) {
  const numArr = [a, b, c, d];
  const dice = [1, 2, 3, 4, 5, 6];

  const map = new Map();

  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < dice.length; j++) {
      if (numArr[i] === dice[j]) {
        if (!map.has("p") || (map.has("p") && map.get("p").num === numArr[i])) {
          map.set("p", {
            num: numArr[i],
            length: map.get("p") ? ++map.get("p").length : 1,
          });
        } else if (
          !map.has("q") ||
          (map.has("q") && map.get("q").num === numArr[i])
        ) {
          map.set("q", {
            num: numArr[i],
            length: map.get("q") ? ++map.get("q").length : 1,
          });
        } else if (
          !map.has("r") ||
          (map.has("r") && map.get("r").num === numArr[i])
        ) {
          map.set("r", {
            num: numArr[i],
            length: map.get("r") ? ++map.get("r").length : 1,
          });
        } else if (
          !map.has("s") ||
          (map.has("s") && map.get("s").num === numArr[i])
        ) {
          map.set("s", {
            num: numArr[i],
            length: map.get("s") ? ++map.get("s").length : 1,
          });
        }
      }
    }
  }

  let answer;
  const mapSize = map.size;

  if (mapSize === 1) {
    /** 네개가 모두 같은 경우 1111 * p */

    const { num } = map.get("p");
    answer = 1111 * num;
  } else if (mapSize === 2) {
    const { num: pNum, length: pLength } = map.get("p");
    const { num: qNum, length: qLength } = map.get("q");

    if (pLength === 3 || qLength === 3) {
      /** 세개(p)가 같고 하나(q)가 다른 경우 (10 * p + q) * 2 */
      answer =
        pLength > qLength ? (10 * pNum + qNum) ** 2 : (10 * qNum + pNum) ** 2;
    } else {
      /** 두개(p, q)씩 같은 경우 (p + q) * |p - q| */

      answer = (pNum + qNum) * Math.abs(pNum - qNum);
    }
  } else if (mapSize === 3) {
    /** 두개(p)가 같고 나머지(q, r)가 다른 경우 q * r */
    const { num: pNum } = map.get("p");
    const { num: qNum } = map.get("q");
    const { num: rNum } = map.get("r");

    let mostLengthKey;

    map.forEach((value, key) => {
      if (value.length === 2) {
        mostLengthKey = key;
      }
    });

    if (mostLengthKey === "p") answer = qNum * rNum;
    if (mostLengthKey === "q") answer = pNum * rNum;
    if (mostLengthKey === "r") answer = pNum * qNum;
  } else if (mapSize === 4) {
    /** 모두 다른 경우 가장 작은 숫자 */
    const values = map.values();

    const valueArr = [];

    for (const value of values) {
      valueArr.push(value.num);
    }

    answer = Math.min(...valueArr);
  }

  return answer;
}