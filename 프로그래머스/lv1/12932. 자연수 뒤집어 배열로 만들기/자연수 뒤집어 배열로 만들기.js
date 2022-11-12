function solution(n) {
    const result = n.toString().split("").reverse().map(item => +item);
    return result;
}