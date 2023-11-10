function solution(ineq, eq, n, m) {
    let answer;
    let condition;
    
    if(ineq === '>') {
        condition = eq === '=' ? n >= m : n > m;
        answer = condition ? 1 : 0
    } else if(ineq === '<') {
        condition = eq === '=' ? n <= m : n < m;
        answer = condition ? 1 : 0
    }
    
    return answer;
}
