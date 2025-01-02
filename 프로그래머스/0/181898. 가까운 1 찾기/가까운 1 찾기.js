function solution(arr, idx) {
  const filtered = arr.map((num, i) => (num && i >= idx ? num : 0));
  
  return filtered.indexOf(1);
}