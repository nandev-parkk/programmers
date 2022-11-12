function solution(s){
    const str = ['p', 'P', 'y', 'Y'];
    let count = {p: 0, y: 0};

    for(i of s) {
        if(i === str[0] || i === str[1]) {
            count.p++;
        } else if(i === str[2] || i === str[3]) {
            count.y++;
        }
    }
    
    return count.p === count.y ? true : false;
}