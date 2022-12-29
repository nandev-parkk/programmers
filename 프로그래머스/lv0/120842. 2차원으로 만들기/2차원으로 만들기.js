
function solution(num_list, n) {    
    const outerArr = [];
    
    for(i = 0; i < num_list.length / n; i++) {
        outerArr.push(num_list.slice(i * n, i * n + n));
    }
    
    return outerArr;
}