function solution (key, lock) {
  let answer = false;
  
  const board = makeBoard(lock, key.length);
  let copy_key = key;
  
  for(let i = 0; i < 4; i++) {
    copy_key = rotate(copy_key);
    
    for(let j = 0; j <= board.length - key.length; j++) {
      for(let k = 0; k <= board.length - key.length; k++) {
        const copy_lock = JSON.parse(JSON.stringify(board));
        
        for(let l = 0; l < key.length; l++) {
          for(let m = 0; m < key.length; m++) {
            copy_lock[j+l][k+m] += copy_key[l][m];
          }
        }
        
        answer = isCheck(copy_lock, key.length, lock.length);
        if(answer) return answer;
      }
    }
  }
  
  return answer;
}

const rotate = (arr) => {
  return arr.map((_, idx) => {
    const rest = [];
    for(let i = arr.length - 1; i >= 0; i--)
      rest.push(arr[i][idx]);
    return rest;
  });
}

const makeBoard = (arr, len) => {
    const diff = (arr.length - len) * 2;
    const blocks = arr.length * 3 - 2 - diff;
    
    return new Array(blocks).fill().map((_, idx) => {
      const div = (blocks - arr.length) / 2;
      if(idx >= div && idx < div+arr.length) {
        const fb = new Array(div).fill(0);
        return [...fb, ...arr[idx-div], ...fb];
      }
      return new Array(blocks).fill(0);
    });
}

const isCheck = (arr, klen, llen) => {
  const start = klen - 1;
  const last = start + llen;
  
  for(const outer of arr.slice(start, last)) {
    for(const inner of outer.slice(start, last)) {
      if(inner !== 1) return false;
    }
  }
  
  return true;
}