function solution(numbers, hand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  const leftKeypad = [1, 4, 7];
  const rightKeypad = [3, 6, 9];

  // 각각 *, #에서 시작하기 때문에 keypad의 해당 x, y 인덱스
  let leftHandPosition = [0, 3];
  let rightHandPosition = [2, 3];
  let answer = "";

  const getKeypadPosition = (num) => {
    let x = NaN;
    let y = NaN;

    for (let i = 0; i < keypad.length; i++) {
      if (!keypad[i].includes(num)) continue;

      [x, y] = [keypad[i].indexOf(num), i];
    }

    return [x, y];
  };

  for (let i = 0; i < numbers.length; i++) {
    const targetNum = numbers[i];

    if (leftKeypad.includes(targetNum)) {
      leftHandPosition = getKeypadPosition(targetNum);
      answer += "L";
    } else if (rightKeypad.includes(targetNum)) {
      rightHandPosition = getKeypadPosition(targetNum);
      answer += "R";
    } else {
      const [leftHandX, leftHandY] = leftHandPosition;
      const [rightHandX, rightHandY] = rightHandPosition;
      const [targetX, targetY] = getKeypadPosition(targetNum);

      const leftHandDistance =
        Math.abs(targetX - leftHandX) + Math.abs(targetY - leftHandY);
      const rightHandDistance =
        Math.abs(targetX - rightHandX) + Math.abs(targetY - rightHandY);

      if (
        (leftHandDistance === rightHandDistance && hand === "left") ||
        leftHandDistance < rightHandDistance
      ) {
        answer += "L";
        leftHandPosition = getKeypadPosition(targetNum);
      } else {
        answer += "R";
        rightHandPosition = getKeypadPosition(targetNum);
      }

      // else if (
      //   (leftHandDistance === rightHandDistance && hand === "right") ||
      //   leftHandDistance > rightHandDistance
      // ) {
      //   answer += "R";
      //   rightHandPosition = getKeypadPosition(targetNum);
      // }

      // if (leftHandDistance === rightHandDistance) {
      //   if (hand === "left") {
      //     answer += "L";
      //     leftHandPosition = getKeypadPosition(targetNum);
      //   } else {
      //     answer += "R";
      //     rightHandPosition = getKeypadPosition(targetNum);
      //   }
      // } else if (leftHandDistance < rightHandDistance) {
      //   answer += "L";
      //   leftHandPosition = getKeypadPosition(targetNum);
      // } else {
      //   answer += "R";
      //   rightHandPosition = getKeypadPosition(targetNum);
      // }
    }
  }

  return answer;
}