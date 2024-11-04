function solution(a, b) {
  const year = 2016;
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const answer = days[new Date(year, a - 1, b).getDay()];

  return answer;
}