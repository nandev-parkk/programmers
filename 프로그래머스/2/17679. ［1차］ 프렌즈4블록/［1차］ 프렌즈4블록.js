function solution(m, n, board) {
  // board의 각 요소가 문자열이라 치환이 안되므로 배열로 변경
  const mappedBorad = board.map((v) => [...v]);

  const deleteList = [];

  while (true) {
    // 각 요소마다 [row, col], [row, col + 1], [row + 1, col], [row + 1, col + 1] 총 4개의 요소를 검사해 4개가 같으면 deleteList에 현재 요소 좌표 push
    for (let row = 0; row < mappedBorad.length; row++) {
      for (let col = 0; col < mappedBorad[row].length; col++) {
        const currentColBlock = mappedBorad[row][col];

        // 현재 요소가 없거나 높이와 폭이 board의 경계인 경우 계산할 필요가 없으므로 continue
        if (!currentColBlock || row === m - 1 || col === n - 1) continue;

        const nextColBlock = mappedBorad[row][col + 1];
        const nextRowCurrentColBlock = mappedBorad[row + 1][col];
        const nextRowNextColBlock = mappedBorad[row + 1][col + 1];

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

    if (!deleteList.length) return mappedBorad.flat().filter((v) => !v).length;

    // deleteList에 요소가 있으면 제거
    while (deleteList.length) {
      const [row, col] = deleteList.shift();

      mappedBorad[row][col] = "";
      mappedBorad[row][col + 1] = "";
      mappedBorad[row + 1][col] = "";
      mappedBorad[row + 1][col + 1] = "";
    }

    // 제거 후 각 자리에 요소가 있고 다음 줄에도 요소가 있으면 현재 요소와 다음 요소를 swap
    // 위에서 아래로 swap 하는 방법, 이렇게 하면 중간에 요소가 있으면 내릴 수 없으므로 안풀림!
    // for (let row = 0; row < mappedBorad.length; row++) {
    //   for (let col = 0; col < mappedBorad[row].length; col++) {
    //     const currentColBlock = mappedBorad[row][col];
    //
    //     if (!currentColBlock || row === m - 1) continue;
    //
    //     const nextRowCurrentColBlock = mappedBorad[row + 1][col];
    //
    //     if (!nextRowCurrentColBlock) {
    //       [mappedBorad[row][col], mappedBorad[row + 1][col]] = [
    //         mappedBorad[row + 1][col],
    //         mappedBorad[row][col],
    //       ];
    //     }
    //   }
    // }

    // 아래에서 위의 요소를 당겨와야 풀림
    // row index를 m - 1부터 시작해서 ""인 경우 nextIndex를 올린다. nextIndex의 자리에 문자열이 있는 경우
    // 두 요소를 바꾸고 인덱스도 바꾼다.
    // row index나 nextIndex가 -1이 되면 col index를 다시 m -1로 바꾸고 colIndex를 1 올린다.
    // row index가 -1이고 col index가 m -1이 되면 while문 종료
    let rowIndex = m - 1;
    let nextRowIndex = m - 1;
    let colIndex = 0;

    while (true) {
      if (colIndex === n - 1 && nextRowIndex === -1) break;

      if (nextRowIndex === -1) {
        rowIndex = m - 1;
        nextRowIndex = m - 1;
        colIndex++;
      }

      const currentBlock = mappedBorad[rowIndex][colIndex];
      const nextBlock = mappedBorad[nextRowIndex][colIndex];

      if (currentBlock) {
        rowIndex--;
        nextRowIndex--;
        continue;
      } else {
        if (nextBlock) {
          [
            mappedBorad[rowIndex][colIndex],
            mappedBorad[nextRowIndex][colIndex],
          ] = [
            mappedBorad[nextRowIndex][colIndex],
            mappedBorad[rowIndex][colIndex],
          ];

          rowIndex--;
        }

        nextRowIndex--;
      }
    }
  }
}