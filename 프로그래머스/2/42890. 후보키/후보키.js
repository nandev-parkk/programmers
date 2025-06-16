const getCombination = (arr, selectNum) => {
  const result = [];

  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, i, origin) => {
    const rest = origin.slice(i + 1);
    const combination = getCombination(rest, selectNum - 1);
    const attached = combination.map((v) => [fixed, ...v]);

    result.push(...attached);
  });

  return result;
};

const checkUniqueness = (combinations, relation) => {
  const result = [];

  combinations.forEach((combination) => {
    const set = new Set();

    relation.forEach((rel) => {
      set.add(combination.map((combi) => rel[combi]).join(","));
    });

    if (set.size === relation.length) result.push(combination);
  });

  return result;
};

const checkMinimality = (combinations) => {
  const result = [];

  while (combinations.length) {
    result.push(combinations[0]);

    combinations = combinations.reduce((acc, cv) => {
      const isNotMinimality = combinations[0].every((combi) =>
        cv.includes(combi),
      );

      if (!isNotMinimality) acc.push(cv);

      return acc;
    }, []);
  }

  return result.length;
};

function solution(relation) {
  // 컬럼수만큼의 배열 생성
  const arr = Array.from({ length: relation[0].length }, (_, i) => i);
  const combinations = [];

  // 모든 조합 생성
  for (const i in arr) {
    combinations.push(...getCombination(arr, Number(i) + 1));
  }

  // 유일성을 갖춘 조합만 추출
  const uniqueness = checkUniqueness(combinations, relation);

  // 최소성을 갖춘 조합만 추출
  const minimality = checkMinimality(uniqueness);

  return minimality;
}