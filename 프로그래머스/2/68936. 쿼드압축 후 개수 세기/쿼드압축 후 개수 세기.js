function solution(arr) {
  /** 0과 1의 갯수 */
  const answer = [0, 0];

  function check(x, y, size) {
    /** 크기가 1인 정사각형인 경우 현재 좌표의 숫자를 1 올림 */
    if (size === 1) return answer[arr[x][y]]++;

    /**
     * 현재 크기의 정사각형을 확인하는 로직
     * */
    let isAllSame = true;

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (arr[x][y] !== arr[i][j]) {
          isAllSame = false;
          break;
        }
      }
    }

    /** 현재 크기의 정사각형이 모두 같은 숫자이면 현재 좌표의 숫자를 1 올림 */
    if (isAllSame) return answer[arr[x][y]]++;

    /** 정사각형을 반으로 주려버려~ */
    size /= 2;

    check(x, y + size, size); // 1사분면
    check(x, y, size); // 2사분면
    check(x + size, y, size); // 3사분면
    check(x + size, y + size, size); // 4사분면
  }

  check(0, 0, arr.length);

  return answer;
}