function maximumLengthSubstring(s: string): number {
  let maximum = 1;
  let right = 0;
  let left = 0;
  let map = new Map<string, number>();

  while (right < s.length) {
    if (map.has(s[right])) {
      map.set(s[right], map.get(s[right])! + 1);
    } else {
      map.set(s[right], 1);
    }

    while (map.get(s[right])! > 2) {
      map.set(s[left], map.get(s[left])! - 1);
      left++;
    }
    maximum = Math.max(right - left + 1, maximum);
    right++;
  }

  return maximum;
}
console.log(maximumLengthSubstring("bcbbbcba"));
