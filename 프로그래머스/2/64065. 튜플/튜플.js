function solution(s) {
// const answer = new Set();
    
//       const convertedString = JSON.parse(
//     s.replace(/{/g, "[").replace(/}/g, "]"),
//   ).sort((a, b) => a.length - b.length);
    
//       for (const nums of convertedString) {
//     for (const num of nums) {
//       answer.add(num);
//     }
//   }

//   return [...answer];
    
          return JSON.parse(
    s.replace(/{/g, "[").replace(/}/g, "]"),
  ).sort((a, b) => a.length - b.length).reduce((acc, cv) => acc.concat(cv.filter((v) => !acc.includes(v))), []);
}