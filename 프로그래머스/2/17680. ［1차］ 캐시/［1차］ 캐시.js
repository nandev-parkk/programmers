function solution(cacheSize, cities) {
  if (!cacheSize) return cities.length * 5;
    
  const cache = [];
  let runtime = 0;

  for (const city of cities) {
    const toLowerCaseCity = city.toLowerCase();

    if (!cache.includes(toLowerCaseCity)) {
      if (cache.length < cacheSize) cache.push(toLowerCaseCity);
      else {
        cache.shift();
        cache.push(toLowerCaseCity);
      }

      runtime += 5;
    } else {
      cache.splice(cache.indexOf(toLowerCaseCity), 1);
      cache.push(toLowerCaseCity);
      runtime++;
    }
  }

  return runtime;
}