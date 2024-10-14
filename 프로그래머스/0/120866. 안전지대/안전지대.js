function solution(board) {
  const coordinate = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!board[i][j]) continue;

      coordinate.push([i, j]);
    }
  }

  const filteredCoordinate = coordinate
    .map(([row, column]) => {
      return [
        [row - 1, column - 1],
        [row - 1, column],
        [row - 1, column + 1],
        [row, column - 1],
        [row, column + 1],
        [row + 1, column - 1],
        [row + 1, column],
        [row + 1, column + 1],
      ];
    })
    .flat()
    .filter((children) => {
      const [row, column] = children;
      if (
        row >= 0 &&
        row < board.length &&
        column >= 0 &&
        column < board.length
      )
        return children;
    });

  for (const coordinate of filteredCoordinate) {
    const [row, column] = coordinate;

    board[row][column] = 1;
  }

  return board.flat().filter((num) => num === 0).length;
}