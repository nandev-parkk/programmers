function solution(my_string) {
    const words = ['a', 'e', 'i', 'o', 'u'];
    const arr = [...my_string];
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < words.length; j++) {
            if(arr[i] === words[j]) {
                arr[i] = '';
            }
        }
    }
    
    return arr.join('');
}