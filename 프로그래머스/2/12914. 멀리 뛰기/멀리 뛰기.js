function solution(n) {
  const arr = [1n, 1n];

  const getFibo = (n) => {
    if (arr[n] !== undefined) return arr[n];

    arr[n] = getFibo(n - 1) + getFibo(n - 2);

    return arr[n];
  };

  return getFibo(n) % 1234567n;
}