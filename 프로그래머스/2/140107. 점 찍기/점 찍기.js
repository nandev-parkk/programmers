function solution(k, d) {
  let answer = 0;

  // 피타고라스 정리: a^2 + b^2 = c^2
  // x가 0일 때는 y가 d까지 갈 수 있음 => 0,0 0,2 0,4
  // x가 2일 때는 y가 2까지 갈 수 있음 => 2,0 2,2
  // x가 4일 때는 y가 0까지 갈 수 있음 => 4,0
  for (let x = 0; x <= d; x += k) {
    // x 좌표에 대해 최대 y좌표값을 구한다.
    const maxY = parseInt(Math.sqrt(d ** 2 - x ** 2));

    // max까지의 값 중 k의 배수인 값들만 찍어야하므로 k로 나누고 0도 찍어야하니까 + 1
    answer += parseInt(maxY / k) + 1;
  }

  return answer;
}