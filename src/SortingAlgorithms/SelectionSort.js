export const selectionSortAnimations = (array) => {
  const animations = [];
  if (array.length === 1) return array;
  selectionSort(array, animations);
  return animations;
};

const selectionSort = (array, animations) => {
  for (let i = 0; i < array.length; i++) {
    var small = array[i];
    var smallIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      animations.push([j,smallIdx,1]);
      animations.push([j,smallIdx,0]);
      if (array[j] < small) {
        small = array[j];
        smallIdx = j;
      }
    }
    animations.push([i,smallIdx,1]);
    animations.push([i,array[smallIdx],smallIdx,array[i]]);
    animations.push([i,smallIdx,0]);
    array[smallIdx] = array[i];
    array[i] = small;
  }
};
