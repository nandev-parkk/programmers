function solution(n, t, m, p) {
  let temp = "";

  for (let i = 0; i < t * m; i++) {
    const currentNum = i.toString(n).toUpperCase();

    temp += currentNum;
  }

  let answer = "";

  for (let i = p - 1; i < t * m; i += m) {
    answer += temp[i];
  }

  return answer;
}