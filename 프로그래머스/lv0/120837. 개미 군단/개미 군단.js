// 장군 5, 병정 3, 일 개미 1
function solution(hp) {
    let total = hp
    let count = 0;
    
    while(total) {
        if(5 <= total) {
            total -= 5;
            count++;
        }
        
        if(3 <= total && total < 5) {
            total -= 3;
            count++;
        }
        
        if(1 <= total && total < 3) {
            total -= 1;
            count++;
        }
    }
    
    return count;
}