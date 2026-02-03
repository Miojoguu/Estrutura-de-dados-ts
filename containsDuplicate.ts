function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let map = new Map();
  for (let index = 0; index < nums.length; index++) {
    if (!map.has(nums[index])) {
      map.set(nums[index], index);
    } else if (Math.abs(map.get(nums[index]) - index) <= k) {
      return true;
    } else {
      map.set(nums[index], index);
    }
  }
  return false;
}
