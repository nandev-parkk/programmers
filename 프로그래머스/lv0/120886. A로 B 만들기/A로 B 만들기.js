// alphabet 전체를 배열로 만든다
// before와 after의 아이템들을 alphabet의 인덱스로 바꾼다.
// before와 after를 오름차순 또는 내림 차순한다.
// before와 after를 비교해서 맞으면 1을 다르면 0을 반환한다.

function solution(before, after) {
    // 1
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    // 2, 3
    const beforeStr = before.split('').map(item => {
        for(let i = 0; i < alphabet.length; i++) {
            if(item === alphabet[i]) {
                return i
            }
        }
    }).sort((a, b) => a - b).join('')
    
    const afterStr = after.split('').map(item => {
        for(let i = 0; i < alphabet.length; i++) {
            if(item === alphabet[i]) {
                return i
            }
        }
    }).sort((a, b) => a - b).join('')
    
    // 4
    return beforeStr === afterStr ? 1 : 0
}