function solution(a, b) {
const convertedA = a % 2;
  const convertedB = b % 2;

  if (convertedA && convertedB) {
    return a * a + b * b;
  } else if (!convertedA && !convertedB) {
    return Math.abs(a - b);
  } else {
    return 2 * (a + b);
  }
}