function solution(order) {
    const num = [3, 6, 9];
    const arr = order.toString().split('').map(item => +item).filter((item, i) => {
        if(item === num[0] || item === num[1] || item === num[2]) {
            return item
        } 
    })
    return arr.length;
}