function solution(n) {
    const even = [];
    const odd = [];
    
    for(let i = 1; i <= n; i++) {
        i % 2 === 0 ? even.push(i * i) : odd.push(i);
    }
    
    const answer = n % 2 === 0 ? even.reduce((init, val) => init + val, 0) : odd.reduce((init, val) => init + val, 0)
    
    return answer;
}