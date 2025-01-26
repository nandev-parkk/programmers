function solution(want, number, discount) {
let count = 0;
  let start = 0;
  let end = 10; // slice에서 end 이전까지 자르기 때문에 10으로
    
  const wantObj = want.reduce(
    (acc, cv, i) => ({ ...acc, [cv]: number[i] }),
    {},
  );

  while (start <= discount.length - 10) {
    const slicedDiscount = discount.slice(start, end);

    const discountObj = slicedDiscount.reduce(
      (acc, cv) => ({ ...acc, [cv]: (acc[cv] || 0) + 1 }),
      {},
    );

    const wantObjKeys = Object.keys(wantObj);

    let isSameWant = true;

    for (const key of wantObjKeys) {
      if (!(key in discountObj) || wantObj[key] !== discountObj[key]) {
        isSameWant = false;
        break;
      }
    }

    if (isSameWant) {
      count++;
    }

    start++;
    end++;
  }

  return count;
}