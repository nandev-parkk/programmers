function solution(n, works) {
  // 퇴근 전까지 다 처리할 수 있는 경우
  if (works.reduce((acc, cv) => acc + cv, 0) <= n) return 0;

  const sortedWorks = works.sort((a, b) => b - a);

  while (n) {
    const maxWork = sortedWorks[0];

    for (let i = 0; i < sortedWorks.length; i++) {
      if (!n) break;
      if (sortedWorks[i] < maxWork) continue;

      sortedWorks[i] -= 1;
      n--;
    }
  }

  return sortedWorks.reduce((acc, cv) => (acc += cv ** 2), 0);
}