def solution(n, stations, w):
    answer, cur, idx = 0, 0, 0
    
    while cur < n:
        cur += 1
        
        if stations and idx < len(stations):
            if stations[idx] - w <= cur <= stations[idx] + w:
                cur = stations[idx] + w
                idx += 1
                continue
        
        cur += w * 2
        answer += 1

    return answer