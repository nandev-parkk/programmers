function solution(s) {
  if (s.length < 2) return s.length;

  let maxLength = 1;

  const getLength = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    // 팰린드롬이 아닌 곳까지 갔기 때문에 left는 +1, right는 -1 해준 후 + 1
    return --right - ++left + 1;
  };

  for (let i = 0; i < s.length; i++) {
    const leng1 = getLength(i, i);

    const leng2 = getLength(i, i + 1);

    maxLength = Math.max(maxLength, leng1, leng2);
  }

  return maxLength;
}