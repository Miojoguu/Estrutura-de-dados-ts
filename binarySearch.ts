export function search(nums: number[], target: number): number {
  let menor = 0;
  let maior = nums.length - 1;

  while (maior >= menor) {
    let meio = Math.floor((maior + menor) / 2);
    if (nums[meio] == target) {
      return meio;
    } else if (target > nums[meio]) {
      menor = meio + 1;
    } else {
      maior = meio - 1;
    }
  }

  return -1;
}
