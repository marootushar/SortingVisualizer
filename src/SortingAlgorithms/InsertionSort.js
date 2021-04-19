export const insertionSortAnimations = (array) => {
  const animations = [];
  if (array.length === 1) return array;
  insertionSort(array, animations);
  return animations;
};

const insertionSort = (array, animations) => {
  for (let i = 1; i < array.length; i++) {
    let idx = i;
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > array[idx]) {
        animations.push([idx,j,1]);
        animations.push([idx,array[j],j,array[idx]]);
        animations.push([idx,j,0]);
        var temp = array[idx];
        array[idx] = array[j];
        array[j] = temp;
        idx = j;
      }
    }
  }
};

