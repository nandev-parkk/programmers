function solution(n) {
    const result = n.toString().split('').map(item => +item).sort((a, b) => b - a).join('');
    return +result;
}