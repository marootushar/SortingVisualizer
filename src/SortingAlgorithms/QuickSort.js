export const quickSortAnimations = (array) => {
  const animations = [];
  if (array.length === 1) return array;
  quickSort(array, 0, array.length - 1, animations);
  return animations;
};

const quickSort = (array, start, end, animations) => {
  if (start < end) {
    let pivotIdx = start;
    const pivot = array[end];
    for (let i = start; i < end; i++) {
      animations.push([i, pivotIdx,1]);
      animations.push([i, pivotIdx,0]);
      if (array[i] <= pivot) {
        animations.push([i, array[pivotIdx], pivotIdx, array[i]]);
        var temp = array[pivotIdx];
        array[pivotIdx] = array[i];
        array[i] = temp;
        pivotIdx++;
      }
    }
    animations.push([end, pivotIdx]);
    animations.push([end, array[pivotIdx], pivotIdx, array[end]]);
    animations.push([end, pivotIdx]);
    temp = array[pivotIdx];
    array[pivotIdx] = array[end];
    array[end] = temp;
    quickSort(array, start, pivotIdx - 1, animations);
    quickSort(array, pivotIdx + 1, end, animations);
  } else return;
};
