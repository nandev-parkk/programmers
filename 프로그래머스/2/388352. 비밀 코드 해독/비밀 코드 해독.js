const getCombination = (arr, selectNum) => {
  const result = [];

  const combine = (start, combo) => {
    if (combo.length === selectNum) {
      result.push([...combo]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      combine(i + 1, combo);
      combo.pop();
    }
  };

  combine(0, []);

  return result;
};

function solution(n, q, ans) {
  let answer = 0;
  const range = Array.from({ length: n }, (_, i) => i + 1);

  const combinations = getCombination(range, 5);

  for (let combination of combinations) {
    for (let i = 0; i < q.length; i++) {
      if (combination.filter((num) => q[i].includes(num)).length !== ans[i])
        break;

      if (i === q.length - 1) answer += 1;
    }
  }
    
  return answer;
}