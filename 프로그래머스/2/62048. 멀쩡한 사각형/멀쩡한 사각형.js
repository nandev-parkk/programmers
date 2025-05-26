function solution(w, h) {
  function getGCD(num1, num2) {
    while (num2) {
      const result = num1 % num2;

      num1 = num2;
      num2 = result;
    }

    return num1;
  }

  return w * h - (w + h - getGCD(w, h));
}