function solution(age) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j'];
    const result = age.toString().split('').map(item => alphabet[+item]).join('');
    
    return result;
}