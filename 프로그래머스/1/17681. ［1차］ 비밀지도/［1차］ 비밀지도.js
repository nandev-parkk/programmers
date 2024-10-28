function covertBinaryArr(n, numArr) {
  return numArr.map((num) => {
    const binary = [];
    let copyNum = num;

    while (copyNum >= 1) {
      binary.unshift(copyNum % 2);
      copyNum = Math.floor(copyNum / 2);
    }

    while (binary.length < n) {
      binary.unshift(0);
    }

    return binary;
  });
}

function solution(n, arr1, arr2) {
  const convertedBinaryArr1 = covertBinaryArr(n, arr1);
  const convertedBinaryArr2 = covertBinaryArr(n, arr2);

  const plus = convertedBinaryArr1.map((arr, i) => {
    return arr.map((num, j) => num + convertedBinaryArr2[i][j]);
  });

  const replace = plus.map((arr) =>
    arr.reduce((acc, crv) => {
      return crv ? `${acc}#` : `${acc} `;
    }, ""),
  );

  return replace;
}