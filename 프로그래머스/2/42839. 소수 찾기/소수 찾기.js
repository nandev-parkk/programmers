function solution(numbers) {
  function checkIsPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (!(num % i)) return false;
    }

    return true;
  }

  function getPermutation(nums, selectNum) {
    const result = [];

    if (selectNum === 1) return nums.map((v) => [v]);

    nums.forEach((fixed, i, origin) => {
      const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
      const permutation = getPermutation(rest, selectNum - 1);
      const attached = permutation.map((v) => [fixed, ...v]);

      result.push(...attached);
    });

    return result;
  }

  const convertedNumbers = numbers.split("");
  const answer = new Set();

  convertedNumbers.forEach((_, i) => {
    const permutation = [...getPermutation([...numbers], i + 1)];

    permutation.forEach((nums) => {
      const convertedNums = +nums.join("");

      if (checkIsPrime(convertedNums)) answer.add(convertedNums);
    });
  });

  return answer.size;
}