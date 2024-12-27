function solution(n, control) {
  const commands = {
    w: (n) => n + 1,
    s: (n) => n - 1,
    d: (n) => n + 10,
    a: (n) => n - 10,
  };

  Array.from(control).forEach((command) => {
    n = commands[command](n);
  });

  return n;
}