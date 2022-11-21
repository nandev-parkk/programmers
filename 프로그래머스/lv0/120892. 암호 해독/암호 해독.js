function solution(cipher, code) {
    const arr = [];
    
    for(let i = 1; i <= cipher.length; i++) {
        const order = i * code - 1
        
        arr.push(cipher[order])
    }
    
    return arr.join('');
}