function solution(x, n) {
    let num = 0;
    const arr = [];
    
    for(let i = 1; i <= n; i++) {
        num += x;
        arr.push(num);
    }
    
    return arr;
}