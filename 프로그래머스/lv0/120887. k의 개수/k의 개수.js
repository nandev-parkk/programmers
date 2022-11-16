// for문을 i 시작부터 j까지 돌린다.
// 모든 숫자를 배열에 넣고 배열의 아이템을 문자열로 변경하고 다시 숫자로 변경해서 join 한다.
// 해당 배열에서 k를 찾아낸다.
function solution(i, j, k) {
    const arr = [];
    
    for(let z = i; z <= j; z++) {
        arr.push(z);
    }
    
    const result = arr.join('').split('').filter(item => +item === k);
    return result.length;
}