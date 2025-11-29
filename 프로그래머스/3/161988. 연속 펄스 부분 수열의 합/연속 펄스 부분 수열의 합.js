const getMax = (arr) => {
  let sum = 0;
  let temp = 0;

  for (const num of arr) {
    temp = Math.max(temp + num, num);

    if (sum < temp) sum = temp;
  }

  return sum;
};

function solution(sequence) {
  const pulse = [-1, 1];
  const a = sequence.map((num, i) => num * pulse[i % 2]);
  const b = sequence.map((num, i) => num * pulse[!(i % 2) ? 1 : 0]);

  // console.log(a, "a");
  // console.log(b, "b");

  const resultA = getMax(a);
  const resultB = getMax(b);

  console.log(resultA, resultB);

  return Math.max(resultA, resultB);

  // 음수면 패스
  /** 1) start나 end가 음수인 경우
   *    - start++, end++
   *  2) start와 end가 양수인 경우
   *    - end++
   *  end++가 undefined면 종료
   * */

  // start가 음수면 start, end 모두 + 1
  // start, end가 양수면 end + 1이 음수일 때까지 end + 1
  // 다 더한 후 현재 결과값보다 크면 최신화 하니면 패스
  // start를
}