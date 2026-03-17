/** 확장된 board 생성 함수 */
const makeExpandedBoard = ({ arr, len }) => {
  /**
   * 1. 두 배열의 크기 차이 구하기
   *  - 2를 곱해주는 이유는 가로/세로 관점에서 최대 2개의 key 배열이 왼쪽-오른쪽/위쪽-아래쪽에 추가되기 때문
   * */
  const diff = (arr.length - len) * 2;

  /**
   * 2. 전체 배열의 크기 구하기
   *  - 전체 배열의 크기는 lock 배열 크기의 3배에서 사이드에 추가되는 key 배열이 각각 모서리 1칸씩 점유하므로 2를 빼주고 위에서 구한 diff 를 빼준 값이 된다.
   * */
  const blocks = arr.length * 3 - 2 - diff;

  /**
   * 3. blocks 크기 만큼의 확장된 2차원 배열을 생성
   * */
  return Array.from({ length: blocks }, (_, i) => {
    // 전체 배열에서 중앙에 위치하는 lock 배열의 공간
    const div = (blocks - arr.length) / 2;

    // 해당 위치가 전체 배열의 중앙인 경우
    if (i >= div && i < div + arr.length) {
      // div을 초과하는 나머지 배열은 0으로 채움
      const others = Array.from({ length: div }, () => 0);

      // 중앙 부분은 기존 div 값을 넣어줌
      return [...others, ...arr[i - div], ...others];
    }

    // 해당 위치는 blockBlock 외부의 공간이므로 모두 0으로 초기화
    return Array.from({ length: blocks }, () => 0);
  });
};

/** 90도씩 회전시키는 함수 */
const rotate = (arr) => {
  return arr.map((_, i) => {
    const rotatedArr = [];

    // 배열의 마지막부터 접근하여 마지막 원소(j)와 현재 위치(i)를 교환
    for (let j = arr.length - 1; j >= 0; j--) rotatedArr.push(arr[j][i]);

    return rotatedArr;
  });
};

/** 잠금 해제 가능 여부 체크하는 함수 */
const isAvailableUnlock = ({ arr, keyLength, lockLength }) => {
  // 전체 배열에서 가운데 lock 영역은 arr.slice(start, end)
  const start = keyLength - 1;
  const end = start + lockLength;

  // outer는 전체 배열에서 lock 배열이 있는 첫 행
  for (const outer of arr.slice(start, end)) {
    // inner는 첫 행에서 lock 배열만의 행을 말한다.
    for (const inner of outer.slice(start, end)) {
      // 1이 아니면 잠금 해제 불가
      if (inner !== 1) return false;
    }
  }

  return true;
};

/**
 * <board>
 * [
 *   [ 0, 0, 0, 0, 0, 0, 0 ],
 *   [ 0, 0, 0, 0, 0, 0, 0 ],
 *   [ 0, 0, 1, 1, 1, 0, 0 ],
 *   [ 0, 0, 1, 1, 0, 0, 0 ],
 *   [ 0, 0, 1, 0, 1, 0, 0 ],
 *   [ 0, 0, 0, 0, 0, 0, 0 ],
 *   [ 0, 0, 0, 0, 0, 0, 0 ]
 * ]
 * */
function solution(key, lock) {
  let answer = false;

  const expandedBoard = makeExpandedBoard({ arr: lock, len: key.length });
  let copiedKey = key;

  // 90, 180, 270, 360도 총 4번 회정
  for (let i = 0; i < 4; i++) {
    copiedKey = rotate(copiedKey);

    // 전체 탐색 배열에서 오직 key 배열만 처음부터 끝까지 위치를 이동하며 탐색을 진행한다.
    // 이때 시작위치는 0이며, 종료위치는 마지막 원소에서 key 배열의 길이만큼 떨어진 곳이 될 것이다.
    for (let j = 0; j <= expandedBoard.length - key.length; j++) {
      for (let k = 0; k <= expandedBoard.length - key.length; k++) {
        // JSON 함수를 이용해 원본 전체 탐색 배열을 복사
        const copiedLock = JSON.parse(JSON.stringify(expandedBoard));

        // key에 담긴 값(copiedKey[l][m])을 현재 key가 위치하고 있는 전체 탐색 배열 위치 copiedLock[j + l][k + m]과 더해줌
        for (let l = 0; l < key.length; l++) {
          for (let m = 0; m < key.length; m++) {
            copiedLock[j + l][k + m] += copiedKey[l][m];
          }
        }

        // 계산이 완료된 copiedLock을 체크 함수에 전달
        answer = isAvailableUnlock({
          arr: copiedLock,
          keyLength: key.length,
          lockLength: lock.length,
        });

        // 만일 잠금해제가 가능한 상태면 바로 반복을 종료하고 정답을 리턴

        if (answer) return answer;
      }
    }
  }

  return answer;
}