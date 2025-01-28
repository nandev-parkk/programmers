function solution(n,a,b)
{
let count = 1;

  while (true) {
        if (
      (a % 2 && !(b % 2) && b === a + 1) ||
      (!(a % 2) && b % 2 && b === a - 1)
    )
      break;

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    count++;
  }

  return count;
}