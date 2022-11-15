// 피자 개수 % n이 0일때까지 for문을 돌린다.

function solution(n) {
    let slice = 6;
    let count = 1;
    
    for(let i = 1; slice % n !== 0; i++) {
        slice += 6;
        count++;
    }
    
    return count;
}