function getLength(arr, answers) {
  return Array.from({ length: answers.length }, (_, i) => arr[i % arr.length])
    .map((num, i) => (num === answers[i] ? 1 : 0))
    .filter((num) => num).length;
}

function solution(answers) {
  const people = [
    {
      name: 1,
      length: getLength([1, 2, 3, 4, 5], answers),
    },
    {
      name: 2,
      length: getLength([2, 1, 2, 3, 2, 4, 2, 5], answers),
    },
    {
      name: 3,
      length: getLength([3, 3, 1, 1, 2, 2, 4, 4, 5, 5], answers),
    },
  ];

  const max = Math.max(
    ...[people[0].length, people[1].length, people[2].length],
  );

  const result = people
    .filter((person) => person.length === max)
    .map((person) => person.name)
    .sort((a, b) => a - b);

  return result;
}