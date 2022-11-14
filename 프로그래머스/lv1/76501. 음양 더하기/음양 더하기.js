function solution(absolutes, signs) {
    for(let i = 0; i < absolutes.length; i++) {
        if(!signs[i]) {
            absolutes[i] = -absolutes[i];
        }
    }
    
    const result = absolutes.reduce((sum, item) => sum + item, 0);
    return result;
}