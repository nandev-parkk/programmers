function solution(board, moves) {
  const basket = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    const craneIndex = moves[i] - 1;

    for (let j = 0; j < board.length; j++) {
      const boardIndex = board[j][craneIndex];

      // board에 인형이 없으면 continue
      if (!boardIndex) continue;

      if (boardIndex) {
        basket.push(boardIndex);
        board[j][craneIndex] = 0;

        break;
      }
    }

    if (!basket.length) continue;

    const lastNum = basket[basket.length - 1];
    const lastPrevNum = basket[basket.length - 2];

    if (lastNum === lastPrevNum) {
      basket.splice(-2, 2);
      count += 2;
    }
  }
    
    return count;
}