function solution(n) {
    let num = 2;
    
    for(let i = 1; i <= n; i++) {
        if(i * i === n) num = 1;
    }
    
    return num;
}