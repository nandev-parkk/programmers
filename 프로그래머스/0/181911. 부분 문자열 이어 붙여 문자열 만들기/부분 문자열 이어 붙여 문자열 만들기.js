function solution(my_strings, parts) {
    return parts.map(([s, e], i) => my_strings[i].substring(s, e + 1)).join("");
}