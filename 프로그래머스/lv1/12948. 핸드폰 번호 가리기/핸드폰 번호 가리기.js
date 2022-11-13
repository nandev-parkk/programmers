function solution(phone_number) {
    const arr = [...phone_number];
    
    for(let i = 0; i < arr.length; i++) {
        let limit = arr.length - 4;
        
        if(i === limit) {
            break;
        }
        
        arr[i] = '*';
    }
    
    return arr.join('');
}