function getGCD(num1, num2) {
  while (num2) {
    const result = num1 % num2;

    num1 = num2;
    num2 = result;
  }

  return num1;
}

function solution(arr) {
  // console.log(arr);

  while (arr.length >= 2) {
    // 두 수의 최대공약수를 구한다.
    const biggerNum = arr.pop();
    const smallerNum = arr.pop();

    const gcd = getGCD(biggerNum, smallerNum);

    // 두 수의 최소공배수를 구한다.
    const lcm = Math.floor((biggerNum * smallerNum) / gcd);

    // arr에 push한다.
    arr.push(lcm);
  }

  return arr[0];
}