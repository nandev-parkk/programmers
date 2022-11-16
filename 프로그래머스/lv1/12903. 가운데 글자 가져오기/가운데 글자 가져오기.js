function solution(s) {
    const length = s.length;
    const halfLength = length / 2
    const evenStr = [s[halfLength - 1], s[halfLength]].join('');
    const oddStr = s[Math.round(halfLength - 1)];

    return length % 2 === 0 ? evenStr : oddStr;
}