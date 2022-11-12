function solution(num) {
    const result = num.toString().split('').map(item => +item).reduce((sum, item) => sum += item, 0);
    return result;
}