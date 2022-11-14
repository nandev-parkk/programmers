function solution(n) {
    const arr = [];
    
    for(let i = 1; i <= n; i++) {
        if(i % 2 !== 0) {
            arr[i] = "수";
        } else {
            arr[i] = "박";
        }
    }
    
    return arr.join('');
}