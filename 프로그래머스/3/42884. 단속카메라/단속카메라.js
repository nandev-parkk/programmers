function solution(routes) {
  // 가장 먼저 진출하는 차량의 진출 위치에 카메라를 설치해야 함.
  const sortedRoutes = routes.sort((a, b) => a[1] - b[1]);

  let answer = 1; // 카메라 설치 대수
  let camera = sortedRoutes[0][1]; // 최초 카메라 위치, 가장 먼저 진출하는 차량의 진출 위치

  for (const [start, end] of sortedRoutes) {
    if (camera >= start) continue;

    camera = end;
    answer++;
  }

  return answer;
}