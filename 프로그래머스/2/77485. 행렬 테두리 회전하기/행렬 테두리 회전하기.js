function solution(rows, columns, queries) {
  // 행렬 만들어~
  const matrix = Array.from({ length: rows }, (_, i) => {
    const row = [];
    const start = i * columns + 1;
    const end = (i + 1) * columns;

    for (let i = start; i <= end; i++) {
      row.push(i);
    }

    return row;
  });

  const answer = [];

  // queries를 돌아
  for (const [x1, y1, x2, y2] of queries) {
    const [minRow, minCol, maxRow, maxCol] = [x1 - 1, y1 - 1, x2 - 1, y2 - 1];

    let [currentRow, currentCol] = [minRow, maxCol];

    // 우측 상단부터 시작
    const temp = [matrix[currentRow][currentCol]];

    while (currentCol > minCol) {
      temp.push(
        (matrix[currentRow][currentCol] = matrix[currentRow][--currentCol]),
      );
    }

    while (currentRow < maxRow)
      temp.push(
        (matrix[currentRow][currentCol] = matrix[++currentRow][currentCol]),
      );

    while (currentCol < maxCol)
      temp.push(
        (matrix[currentRow][currentCol] = matrix[currentRow][++currentCol]),
      );

    while (currentRow > minRow)
      temp.push(
        (matrix[currentRow][currentCol] = matrix[--currentRow][currentCol]),
      );

    matrix[currentRow + 1][currentCol] = temp[0];

    const min = Math.min(...temp);
    answer.push(min);
  }

  return answer;
}