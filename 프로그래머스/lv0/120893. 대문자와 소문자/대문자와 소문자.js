function solution(my_string) {
    // 첫번째 짠 코드
    // const original = my_string.split('');
    // const lowerCase = my_string.toLowerCase().split('').map((item, i) => item === original[i] ? true : false)
    // const result = [...original].map((item, i) => lowerCase[i] ? item.toUpperCase() : item.toLowerCase()).join('');
    
    // 두번째 짠 코드
    const result = [...my_string].map(item => {
        const upperCase = item.toUpperCase();
        
        return item === upperCase ? item.toLowerCase() : item.toUpperCase();
    }).join('');
    
    return result;
}