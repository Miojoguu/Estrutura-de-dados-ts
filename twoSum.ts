function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  for (let index = 0; index < nums.length; index++) {
    let result = target - nums[index];
    if (map.has(result)) {
      return [map.get(result), index];
    } else {
      map.set(nums[index], index);
    }
  }

  return [];
}
