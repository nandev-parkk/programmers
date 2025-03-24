function solution(intStrs, k, s, l) {
    const answer = intStrs
    .map((str) => {
      const slicedStr = str.slice(s, s + l);

      return +slicedStr;
    })
    .filter((num) => num > k);
  
  return answer;
}