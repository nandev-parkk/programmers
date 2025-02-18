function solution(numbers, target) {
  let answer = 0;

  function dfs(i, sum) {
    if (i === numbers.length) {
      sum === target && answer++;

      return;
    }

    dfs(i + 1, sum + numbers[i]);
    dfs(i + 1, sum - numbers[i]);
  }

  dfs(0, 0);

  return answer;
}
