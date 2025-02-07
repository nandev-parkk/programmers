function solution(cacheSize, cities) {
  const CACHE_MISS = 5;

  // cacheSize가 0이면 바로 계산 후 리턴
  if (!cacheSize) return cities.length * CACHE_MISS;

  const cache = [];
  let runtime = 0;

  for (const city of cities) {
    // newyork, NewYork 모두 같은 도시이기 때문에 소문자로 바꿔준다.
    const toLowerCaseCity = city.toLowerCase();

    if (!cache.includes(toLowerCaseCity)) {
      cache.length >= cacheSize && cache.shift();
      runtime += CACHE_MISS;
    } else {
      // 이미 cache 안에 데이터가 있으면 오래된 데이터를 지우고 새로운 데이터를 넣어줘야한다.
      cache.splice(cache.indexOf(toLowerCaseCity), 1);
      runtime++;
    }

    cache.push(toLowerCaseCity);
  }

  return runtime;
}