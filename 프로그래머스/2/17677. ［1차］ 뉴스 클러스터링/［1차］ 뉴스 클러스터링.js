function solution(str1, str2) {
  // 1. 문자열을 for문을 돌아 두 글자씩 끊어서 다중 집합을 만든다.
  // 1-1. 다중 집합 원소중 영문자가 아닌 문자 또는 공백이 포함되어 있는 원소를 제거한다.
  const str1Multiset = getMultiset(str1);
  const str2Multiset = getMultiset(str2);

  // 둘 다 공집합인 경우 나눗셈이 안되므로 66536 리턴
  if (!str1Multiset.length && !str2Multiset.length) return 65536;

  // 3. str1, str2의 교집합을 구한다.
  const intersection = getIntersection(str1Multiset, str2Multiset);

  // 4. str1, str2의 합집합을 구한다.
  const union = getUnion(str1Multiset, str2Multiset);

  const answer = Math.floor((intersection.length / union.length) * 65536);

  // 5. 교집합 크기 / 합집합 크기 * 65536 계산 후 소수점 아래를 버리고 정수부만 구한 후 리턴한다.
  return answer;
}

function checkAlphabet(str) {
  return /[a-z]/.test(str);
}

function getMultiset(str) {
  const multiset = [];

  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) break;

    const firstChar = str[i].toLowerCase();
    const secondChar = str[i + 1].toLowerCase();

    if (!checkAlphabet(firstChar) || !checkAlphabet(secondChar)) continue;

    // 추후 다른 배열과 비교하기 위해 값을 문자열 형태로 삽입
    const stringifyStr = JSON.stringify([firstChar, secondChar]);

    multiset.push(stringifyStr);
  }

  return multiset;
}

function getIntersection(multiset1, multiset2) {
  const intersection = [];

  for (const set of multiset1) {
    if (intersection.includes(set) || !multiset2.includes(set)) continue;

    const filteredMultiset1 = multiset1.filter((v) => set === v);
    const filteredMultiset2 = multiset2.filter((v) => set === v);

    if (filteredMultiset1.length < filteredMultiset2.length)
      intersection.push(...filteredMultiset1);
    else intersection.push(...filteredMultiset2);
  }

  return intersection;
}

function getUnion(multiset1, multiset2) {
  const union = [];

  for (const set of multiset1) {
    if (union.includes(set)) continue;

    const filteredMultiset1 = multiset1.filter((v) => set === v);
    const filteredMultiset2 = multiset2.filter((v) => set === v);

    if (filteredMultiset1.length > filteredMultiset2.length)
      union.push(...filteredMultiset1);
    else union.push(...filteredMultiset2);
  }

  const filteredMultiset2 = multiset2.filter((v) => !union.includes(v));

  return [...union, ...filteredMultiset2];
}