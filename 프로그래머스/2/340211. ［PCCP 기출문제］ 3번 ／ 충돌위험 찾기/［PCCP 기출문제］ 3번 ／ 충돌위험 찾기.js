function solution(points, routes) {
  let answer = 0;
  const crashed = new Map();

  const updateCrashed = (second, r, c) => {
    const key = `${second}: ${r}-${c}`;
    const value = (crashed.get(key) || 0) + 1;

    crashed.set(key, value);
  };

  for (const route of routes) {
    let second = 0;

    // 각 route의 시작지점
    let [sr, sc] = points[route[0] - 1];

    // 시작시 겹칠 수 있으므로 update
    updateCrashed(second, sr, sc);

    for (let i = 1; i < route.length; i++) {
      // 각 route의 종료지점
      const end = route[i] - 1;

      // 종료지점의 좌표
      const [er, ec] = points[end];

      // 조건에 따라 상, 하, 좌, 우로 이동
      const srMove = sr < er ? 1 : -1;
      const scMove = sc < ec ? 1 : -1;

      // 수직으로 이동
      while (sr !== er) {
        second++;
        sr += srMove;
        updateCrashed(second, sr, sc);
      }

      // 수평으로 이동
      while (sc !== ec) {
        second++;
        sc += scMove;
        updateCrashed(second, sr, sc);
      }
    }
  }

  // 각 지점에 로봇이 2개 이상 있는 경우 answer update
  for (const count of crashed.values()) {
    if (count > 1) answer++;
  }

  return answer;
}