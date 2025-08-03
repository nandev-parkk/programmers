const getCombination = (info, score, map, start) => {
  const key = info.join(" ");

  if (map.has(key)) map.get(key).push(score);
  else map.set(key, [score]);

  for (let i = start; i < info.length; i++) {
    let copiedInfo = [...info];
    copiedInfo[i] = "-";
    getCombination(copiedInfo, score, map, i + 1);
  }
};

const binarySearch = (info, score) => {
  if (!info) return 0;

  let left = 0;
  let right = info.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (info[mid] >= score) right = mid;
    else left = mid + 1;
  }

  return info.length - left;
};

function solution(info, query) {
  const answer = [];
  const map = new Map();

  // 모든 조합에 대한 점수를 미리 계산
  info.forEach((v) => {
    const splitInfo = v.split(" ");
    const score = +splitInfo.pop();

    getCombination(splitInfo, score, map, 0);
  });

  // 점수 오름차순 정렬
  map.forEach((v) => {
    v.sort((a, b) => a - b);
  });

  for (let i = 0; i < query.length; i++) {
    let queryString = query[i].replaceAll(" and ", " ").split(" ");
    const score = +queryString.pop();
    queryString = queryString.join(" ");

    answer.push(binarySearch(map.get(queryString), score));
  }

  return answer;
}