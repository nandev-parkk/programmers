function solution(arr, idx) {
    return arr.map((num, i) => (num && i >= idx ? num : 0)).indexOf(1);
}