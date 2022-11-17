// emergency를 오름차순으로 정렬하고 변수에 할당한다.
// 할당의 변수와 eg를 비교해서 할당한 변수에 있는 인덱스 + 1로 eg의 값을 변경한다.

function solution(emergency) {
    const arr = [...emergency].sort((a, b) => b - a);
    const result = emergency.map(item => {
        for(let i = 0; i < emergency.length; i++) {
            if(item === arr[i]) {
                 return i + 1;
            }
        }
    })
    
    return result;
}