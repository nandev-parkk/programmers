function solution(array, commands) {
  const answer = commands.map((command) => {
    const slicedArr = array
      .slice(command[0] - 1, command[1])
      .sort((a, b) => a - b);

    return slicedArr[command[2] - 1];
  });

  return answer;
}