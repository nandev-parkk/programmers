function solution(array, commands) {
  const answer = commands.map((command) => {
    const [i, j, k] = command;

    const slicedArr = array.slice(i - 1, j).sort((a, b) => a - b);

    return slicedArr[k - 1];
  });

  return answer;
}