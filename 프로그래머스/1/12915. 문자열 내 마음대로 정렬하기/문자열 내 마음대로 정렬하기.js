function solution(strings, n) {
  const answer = strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]),
  );

  return answer;
}