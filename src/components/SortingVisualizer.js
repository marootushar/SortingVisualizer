import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';
import { mergesort } from '../SortingAlgorithms/MergeSort';

const ARR_SIZE = 300;
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

  // const arraysEqual = (a, b) => {
  //   if (a === b) return true;
  //   if (a == null || b == null) return false;
  //   if (a.length !== b.length) return false;
  //   for (var i = 0; i < a.length; ++i) {
  //     if (a[i] !== b[i]) return false;
  //   }
  //   return true;
  // };

  const auxArray = array.slice();

  const mergeSort = () => {
    setDisable(true);
    const animations = mergesort(auxArray);
    const arrayBars = document.getElementsByClassName('arrayBar');
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? COL1 : COL2;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
    setTimeout(() => {
      setArray(auxArray);
      setDisable(false);
    }, animations.length * ANIMATION_SPEED);
    // arrayBars.forEach((e) => {
    //   setTimeout(() => {
    //     e.style.backgroundColor = COL2;
    //   }, i * ANIMATION_SPEED);
    //   i++;
    // });
    // (var i = 0; i < ARR_SIZE; i++) {
    //   setTimeout(() => {
    //     arrayBars[i].style.backgroundColor = COL2;
    //   }, i * ANIMATION_SPEED);
    // }
  };

  const quickSort = () => {};

  const heapSort = () => {};

  const bubbleSort = () => {};

  // const test = () => {
  //   for (var i = 0; i < 1000; i++) {
  //     mergeSort();
  //   }
  // };

  return (
    <>
      <div className='buttonsContainer'>
        <button
          onClick={() => {
            if (!disable) resetArray();
          }}
          className='newArray'
        >
          Generate New Array
        </button>
        <button
          onClick={() => {
            if (!disable) mergeSort();
          }}
          className='newArray'
        >
          Merge Sort
        </button>
        <button
          onClick={() => {
            if (!disable) quickSort();
          }}
          className='newArray'
        >
          Quick Sort
        </button>
        <button
          onClick={() => {
            if (!disable) heapSort();
          }}
          className='newArray'
        >
          Heap Sort
        </button>
        <button
          onClick={() => {
            if (!disable) bubbleSort();
          }}
          className='newArray'
        >
          Bubble Sort
        </button>
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