function solution(tickets) {
  const answer = [];
  const length = tickets.length;
  const visited = Array.from({ length }, () => false);

  const dfs = (routes) => {
    if (routes.length === length + 1) answer.push(routes);

    for (const idx in tickets) {
      const [origin, destination] = tickets[idx];

      if (!visited[idx]) {
        if (routes.at(-1) === origin) {
          visited[idx] = true;
          dfs([...routes, destination]);
          visited[idx] = false;
        }
      }
    }
  };

  dfs(["ICN"]);

  return answer.sort()[0];
}