function bubbleSort(array: number[]) {
  for (let x = 0; x < array.length; x++) {
    console.log(array);
    let sorted = true;
    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] > array[index + 1]) {
        sorted = false;
        let antigo = array[index + 1];
        array[index + 1] = array[index];
        array[index] = antigo;
      }
    }
    if (sorted) {
      break;
    }
  }
}

bubbleSort([1, 2, 5, 4, 3]);
