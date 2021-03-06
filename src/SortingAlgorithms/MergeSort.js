export const mergeSortAnimations = (array) => {
  const animations = [];
  if (array.length === 1) return array;
  const auxArray = array.slice();
  mergeSort(array, 0, array.length - 1, auxArray, animations);
  return animations;
};

const mergeSort = (realArray, start, end, auxArray, animations) => {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSort(auxArray, start, mid, realArray, animations);
  mergeSort(auxArray, mid + 1, end, realArray, animations);
  doMerge(realArray, start, mid, end, auxArray, animations);
};

const doMerge = (realArray, start, mid, end, auxArray, animations) => {
  let k = start;
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxArray[i] <= auxArray[j]) {
      animations.push([k, auxArray[i]]);
      realArray[k++] = auxArray[i++];
    } else {
      animations.push([k, auxArray[j]]);
      realArray[k++] = auxArray[j++];
    }
  }
  while (i <= mid) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxArray[i]]);
    realArray[k++] = auxArray[i++];
  }
  while (j <= end) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxArray[j]]);
    realArray[k++] = auxArray[j++];
  }
};
