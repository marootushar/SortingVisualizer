import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';
import { mergeSortAnimations } from '../SortingAlgorithms/MergeSort';
import { quickSortAnimations } from '../SortingAlgorithms/QuickSort';
import { bubbleSortAnimations } from '../SortingAlgorithms/BubbleSort';
import { selectionSortAnimations } from '../SortingAlgorithms/SelectionSort';
const ARR_SIZE = 150;
const COL1 = 'red';
const COL2 = '#fff';
const ANIMATION_SPEED = 5;

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const arr = [];
    for (var i = 0; i < ARR_SIZE; i++) {
      var x = Math.floor(Math.random() * 750 + 5);
      arr.push(x);
    }
    setArray(arr);
  };

  const sendAlert = () => {
    alert(
      'A sorting algorithm is already running! Press refresh button to stop.'
    );
  };

  const mergeSort = () => {
    setDisable(true);
    const auxArray = array.slice();
    const animations = mergeSortAnimations(auxArray);
    const arrayBars = document.getElementsByClassName('arrayBar');
    for (let i = 0; i < animations.length; i++) {
      const changeColor = i % 3 !== 2;
      if (changeColor) {
        const [b1Idx, b2Idx] = animations[i];
        const b1Style = arrayBars[b1Idx].style;
        const b2Style = arrayBars[b2Idx].style;
        const color = i % 3 === 0 ? COL1 : COL2;
        setTimeout(() => {
          b1Style.backgroundColor = color;
          b2Style.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [b1Idx, newHeight] = animations[i];
          const b1Style = arrayBars[b1Idx].style;
          b1Style.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
    setTimeout(() => {
      setArray(auxArray);
      setDisable(false);
    }, animations.length * ANIMATION_SPEED);
  };

  const quickSort = () => {
    const auxArray = array.slice();
    const animations = quickSortAnimations(auxArray);
    animate(animations,auxArray);
  };

  const heapSort = () => {
    const newArray = array.slice().sort((a, b) => a - b);
    const quickArray = quickSortAnimations(array);
    console.log(arraysEqual(quickArray, newArray));
    resetArray();
  };

  const bubbleSort = () => {
    const auxArray = array.slice();
    const animations = bubbleSortAnimations(auxArray);
    animate(animations, auxArray);
  };

  const insertionSort = () => {};

  const selectionSort = () => {
    const auxArray = array.slice();
    const animations = selectionSortAnimations(auxArray);
    animate(animations, auxArray);
  };

  const animate = (animations, auxArray) => {
    setDisable(true);
    const arrayBars = document.getElementsByClassName('arrayBar');
    for (let i = 0; i < animations.length; i++) {
      if (animations[i].length === 3) {
        const [b1Idx, b2Idx, colChoice] = animations[i];
        const b1Style = arrayBars[b1Idx].style;
        const b2Style = arrayBars[b2Idx].style;
        const color = colChoice ? COL1 : COL2;
        setTimeout(() => {
          b1Style.backgroundColor = color;
          b2Style.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else if (animations[i].length === 4) {
        setTimeout(() => {
          const [b1Idx, b1Height, b2Idx, b2Height] = animations[i];
          const b1Style = arrayBars[b1Idx].style;
          b1Style.height = `${b1Height}px`;
          const b2Style = arrayBars[b2Idx].style;
          b2Style.height = `${b2Height}px`;
        }, i * ANIMATION_SPEED);
      }
    }
    setTimeout(() => {
      setArray(auxArray);
      setDisable(false);
    }, animations.length * ANIMATION_SPEED);
  };

  const test = () => {
    for (var i = 0; i < 1000; i++) {
      quickSort();
    }
  };
  const arraysEqual = (a, b) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  return (
    <>
      <div className='buttonsContainer'>
        <button
          onClick={() => {
            if (!disable) resetArray();
            else sendAlert();
          }}
          className='newArray'
        >
          Generate New Array
        </button>
        <button
          onClick={() => {
            if (!disable) mergeSort();
            else sendAlert();
          }}
          className='newArray'
        >
          Merge Sort
        </button>
        <button
          onClick={() => {
            if (!disable) quickSort();
            else sendAlert();
          }}
          className='newArray'
        >
          Quick Sort
        </button>
        <button
          onClick={() => {
            if (!disable) heapSort();
            else sendAlert();
          }}
          className='newArray'
        >
          Heap Sort
        </button>
        <button
          onClick={() => {
            if (!disable) bubbleSort();
            else sendAlert();
          }}
          className='newArray'
        >
          Bubble Sort
        </button>
        <button
          onClick={() => {
            if (!disable) insertionSort();
            else sendAlert();
          }}
          className='newArray'
        >
          Insertion Sort
        </button>
        <button
          onClick={() => {
            if (!disable) selectionSort();
            else sendAlert();
          }}
          className='newArray'
        >
          Selection Sort
        </button>
        <button onClick={() => window.location.reload()}>Refresh</button>
        {/* <button onClick={() => test()} className='newArray'>
          Test
        </button> */}
      </div>
      <div className='arrayContainer'>
        {array.map((value, idx) => (
          <div
            className='arrayBar'
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default SortingVisualizer;
