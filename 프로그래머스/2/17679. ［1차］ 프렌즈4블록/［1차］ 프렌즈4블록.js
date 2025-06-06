function solution(m, n, board) {
  // board의 각 요소가 문자열이라 치환이 안되므로 배열로 변경
  const mappedBoard = board.map((v) => [...v]);

  const deleteList = [];

  while (true) {
    // 각 요소마다 [row, col], [row, col + 1], [row + 1, col], [row + 1, col + 1] 총 4개의 요소를 검사해 4개가 같으면 deleteList에 현재 요소 좌표 push
    for (let row = 0; row < mappedBoard.length; row++) {
      for (let col = 0; col < mappedBoard[row].length; col++) {
        const currentColBlock = mappedBoard[row][col];

        // 현재 요소가 없거나 높이와 폭이 board의 경계인 경우 계산할 필요가 없으므로 continue
        if (!currentColBlock || row === m - 1 || col === n - 1) continue;

        const nextColBlock = mappedBoard[row][col + 1];
        const nextRowCurrentColBlock = mappedBoard[row + 1][col];
        const nextRowNextColBlock = mappedBoard[row + 1][col + 1];

        // 4개의 block이 모두 일치하는지 확인
        const set = new Set([
          currentColBlock,
          nextColBlock,
          nextRowCurrentColBlock,
          nextRowNextColBlock,
        ]);

        if (set.size === 1) deleteList.push([row, col]);
      }
    }

    if (!deleteList.length) return mappedBoard.flat().filter((v) => !v).length;

    // deleteList에 요소가 있으면 제거
    while (deleteList.length) {
      const [row, col] = deleteList.shift();

      mappedBoard[row][col] = "";
      mappedBoard[row][col + 1] = "";
      mappedBoard[row + 1][col] = "";
      mappedBoard[row + 1][col + 1] = "";
    }

    // 아래에서 위의 요소를 당겨와야 풀림
    // 현재 요소가 있는 경우 rowIndex--, nextRowIndex--
    // 현재 요소가 없는 경우 nextRowIndex--, 만약 다음 요소가 있는 경우 현재 요소와 자리를 바꾸고 rowIndex--
    // 만약 nextRowIndex가 -1이면 rowIndex와 nextRowIndex를 m - 1로 초기화하고, colIndex++;
    // 만약 colIndex === n -1이고 nextRowIndex === -1이면 while문 종료
    let rowIndex = m - 1;
    let nextRowIndex = m - 1;
    let colIndex = 0;

    while (true) {
      if (nextRowIndex === -1 && colIndex === n - 1) break;

      if (nextRowIndex === -1) {
        rowIndex = m - 1;
        nextRowIndex = m - 1;
        colIndex++;
      }

      const currentBlock = mappedBoard[rowIndex][colIndex];
      const nextBlock = mappedBoard[nextRowIndex][colIndex];

      if (currentBlock) {
        rowIndex--;
        nextRowIndex--;
        continue;
      } else {
        if (nextBlock) {
          [
            mappedBoard[rowIndex][colIndex],
            mappedBoard[nextRowIndex][colIndex],
          ] = [
            mappedBoard[nextRowIndex][colIndex],
            mappedBoard[rowIndex][colIndex],
          ];

          rowIndex--;
        }

        nextRowIndex--;
      }
    }
  }
}