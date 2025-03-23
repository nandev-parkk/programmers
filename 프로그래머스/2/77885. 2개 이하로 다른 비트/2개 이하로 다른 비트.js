function solution(numbers) {
      const answer = numbers.map((num) => {
    if (!(num % 2)) return ++num;

    const convertedNum = `0${num.toString(2)}`;
    const idx = convertedNum.lastIndexOf("0");

    return parseInt(
      `${convertedNum.slice(0, idx)}10${convertedNum.slice(idx + 2)}`,
      2,
    );
  });

  return answer;
}