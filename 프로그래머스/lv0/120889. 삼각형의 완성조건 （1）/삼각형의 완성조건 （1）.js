// 가장 큰 수를 찾는다.
// 나머지 아이템을 더한다.
// 나머지 아이템과 가장 큰 수를 비교해서 같거나 큰수가 크면 2를 리턴하고 큰 수가 작으면 1을 리턴한다.
function solution(sides) {
    const sortedArr = [...sides].sort((a, b) => b - a);
    const max = sortedArr[0];
    const remainder = [sortedArr[1], sortedArr[2]].reduce((sum, item) => sum+=item, 0);
    
    if(remainder <= max) {
        return 2;
    } else {
        return 1;
    }
    
}