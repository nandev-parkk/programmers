// 구슬을 고르는 가능한 모든 경우의 수를 구해서 리턴
// !는 팩토리얼을 말한다. ex) 3! = 1 * 2 * 3

function solution(balls, share) {
    let n = balls;
    let m = share;
    
    for(let i = 1; i < share; i++) {
        n *= balls - i;
        m *= share - i;
    }
    
    return n / m;
}