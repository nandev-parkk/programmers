function solution(array) {
    // 배열에 값이 하나밖에 없으면 해당 값을 리턴한다.
    if(array.length === 1) return array[0];

    // array 인자의 값을 복사한다.
    // reduce를 통해 초기값을 객체로 설정하고 obj안에 아이템이 있으면 아이템의 값 +1을, 없으면 0 + 1을 한 후 초기값으로 설정한 객체를 리턴한다.
    const obj = [...array].reduce((pv, cv) => {
        pv[cv] = (pv[cv] || 0) + 1;
        
        return pv;
    }, {})
    
    const arr = [];
    
    // obj 객체 안의 key와 value를 배열로 저장한다.
    for (let key in obj) {
        arr.push([key, obj[key]]);
    }
    
    // 배열을 내림차순한다.
    arr.sort((a, b) => b[1] - a[1]);
    
    // 만약 배열의 길이가 1이면 첫번째 요소를 리턴한다.
    if(arr.length === 1) {
        return +arr[0][0]
        
    // 만약 내림차순했는데도 값이 같으면 -1을 리턴한다.
    } else if(arr.length !== 1 && arr[0][1] === arr[1][1]){
        return -1;
    }
    
    // 내림차순 했기 때문에 가장 큰 값이 제일 먼저 오므로, 첫번째 배열의 key값을 숫자 타입으로 변환하여 리턴한다.
    return +arr[0][0];
}