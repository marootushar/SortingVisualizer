export const bubbleSortAnimations = (array) => {
  const animations = [];
  if (array.length === 1) return array;
  bubbleSort(array, animations);
  return animations;
};

const bubbleSort = (array,animations) => {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      animations.push([j,j+1,1]);
      animations.push([j,j+1,0]);
      if (array[j] > array[j + 1]) {
        animations.push([j,array[j+1],j+1,array[j]]);
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};
