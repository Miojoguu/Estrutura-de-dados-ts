function quicksort(
  array: number[],
  left: number = 0,
  right: number = array.length - 1,
) {
  if (left < right) {
    let pi = particion(array, left, right);
    quicksort(array, left, pi - 1);
    quicksort(array, pi + 1, right);
  }
}
function particion(array: number[], left: number, right: number) {
  let pivot = array[right];

  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  [array[i + 1], array[right]] = [array[right], array[i + 1]] 
  return i + 1;
}

let arr = [0, 3, 6, 7, 8, 4, 2, 1, 5];

console.log("Antes:", arr);
quicksort(arr);
console.log("Depois:", arr);
