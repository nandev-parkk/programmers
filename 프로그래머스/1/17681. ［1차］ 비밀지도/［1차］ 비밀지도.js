function convertBinary(n, num) {
  return num.toString(2).padStart(n, 0).split("");
}

function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    const binary1 = convertBinary(n, arr1[i]);
    const binary2 = convertBinary(n, arr2[i]);

    const map = binary1
      .map((num, j) => {
        const sum = Number(num) + Number(binary2[j]);

        return sum === 1 || sum === 2 ? "#" : " ";
      })
      .join("");

    answer.push(map);
  }

  return answer;
}