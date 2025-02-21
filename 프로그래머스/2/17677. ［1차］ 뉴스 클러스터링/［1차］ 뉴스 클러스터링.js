function solution(str1, str2) {
  // 1. 문자열을 for문을 돌아 두 글자씩 끊어서 다중 집합을 만든다.
  // 1-1. 다중 집합 원소중 영문자가 아닌 문자 또는 공백이 포함되어 있는 원소를 제거한다.
  const str1Set = getMultiset(str1);
  const str2Set = getMultiset(str2);

  // 둘 다 공집합인 경우 나눗셈이 안되므로 66536 리턴
  if (!str1Set.length && !str2Set.length) return 65536;

  // 2. 두 집합의 원소를 중복 제거한다.
  const deduplicatedSet = new Set([...str1Set, ...str2Set]);

  // 3. 남아있는 원소가 str1Set과 str2Set에 몇개 있는지 계산한다.
  // 3-1. 두 값 중 교집합은 min, 합집합은 max 값을 더한다.
  let intersection = 0;
  let union = 0;

  deduplicatedSet.forEach((str) => {
    const filteredStr1SetLength = str1Set.filter((v) => v === str).length;
    const filteredStr2SetLength = str2Set.filter((v) => v === str).length;

    intersection += Math.min(filteredStr1SetLength, filteredStr2SetLength);
    union += Math.max(filteredStr1SetLength, filteredStr2SetLength);
  });

  // 4. 교집합 크기 / 합집합 크기 * 65536 계산 후 소수점 아래를 버리고 정수부만 구한 후 리턴한다.
  const answer = Math.floor((intersection / union) * 65536);

  return answer;
}

function checkAlphabet(str) {
  return /[a-z]{2}/.test(str);
}

function getMultiset(str) {
  const multiset = [];

  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) break;

    const currentStr = str.slice(i, i + 2).toLowerCase();

    if (!checkAlphabet(currentStr)) continue;

    multiset.push(currentStr);
  }

  return multiset;
}