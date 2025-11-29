const getMax = (nums) => {
  let max = 0;
  let partialMax = 0;

  for (const num of nums) {
    partialMax = Math.max(partialMax + num, num);

    if (max < partialMax) max = partialMax;
  }

  return max;
};

function solution(sequence) {
  const pulseSequence = [-1, 1];

  const nums1 = sequence.map((num, i) => num * pulseSequence[i % 2]);
  const nums2 = sequence.map((num, i) => num * pulseSequence[!(i % 2) ? 1 : 0]);

  return Math.max(getMax(nums1), getMax(nums2));
}