function solution(n) {
  const power = n ** 2;
  const result = Array.from({ length: n }, () => new Array(n).fill(0));

  let columnIndex = 0;
  let rowIndex = 0;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // 0: 오른쪽, 1: 아래쪽, 2: 왼쪽, 3: 위쪽
  let directionIndex = 0;
  
  for (let i = 0; i < power; i++) {
    // 배열에 숫자를 채운다.
    result[rowIndex][columnIndex] = i + 1;

    // 다음 위치를 계산한다.
    const nextRowIndex = rowIndex + directions[directionIndex][0];
    const nextColumnIndex = columnIndex + directions[directionIndex][1];

    // 다음 위치가 배열의 길이보다 작고 다음 위치에 데이터가 존재하지 않는지 확인
    // true인 경우 rowIndex, columnIndex 다음 위치로 설정
    // false인 경우 directionIndex를 변경 후 rowIndex와 columnIndex 변경
    if (
      nextRowIndex < n &&
      nextColumnIndex < n &&
      result[nextRowIndex][nextColumnIndex] === 0
    ) {
      rowIndex = nextRowIndex;
      columnIndex = nextColumnIndex;
    } else {
      directionIndex = (directionIndex + 1) % 4;
      rowIndex += directions[directionIndex][0];
      columnIndex += directions[directionIndex][1];
    }
  }
    
    return result;
}