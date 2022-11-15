function solution(num, k) {
    const result = num.toString().split('').map(item => +item).findIndex((item, i) => item === k);
    
    return result === -1 ? -1 : result + 1;
}