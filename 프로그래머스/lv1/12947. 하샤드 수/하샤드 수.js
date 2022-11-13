function solution(x) {
    const num = x.toString().split('').map(item => +item).reduce((sum, item) => sum + item, 0);
    const result = x % num === 0 && true;
    return result;
}