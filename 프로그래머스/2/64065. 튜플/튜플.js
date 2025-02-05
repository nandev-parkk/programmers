function solution(s) {
    return JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
    .sort((a, b) => a.length - b.length)
    .reduce((acc, cv) => acc.concat(cv.filter((v) => !acc.includes(v))), []);
}