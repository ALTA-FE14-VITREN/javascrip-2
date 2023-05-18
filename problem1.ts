function pairSum(arr: number[], target: number): [number, number] | null {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

console.log(pairSum([1, 2, 3, 4, 6], 6));
console.log(pairSum([2, 5, 9, 11], 11));
console.log(pairSum([1, 3, 5, 7], 12));
console.log(pairSum([1, 4, 6, 8], 10));
