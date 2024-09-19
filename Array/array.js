// Set 1 Questions

// Reverse an Array
function arrReverse(arr) {
  return arr.reverse();
}

// Find Maximum Element in an Array
function findMax(arr) {
  return Math.max(...arr);
}

// Sum of All Elements in an Array
function sumOfAll(arr) {
  let sum = arr.reduce((curr, total) => curr + total, 0);
  return sum;
}

// Check if Element Exists in an Array
function elementExists(arr, num) {
  return arr.includes(num);
}

//Count Occurrence of a given Element
function occur(arr, num) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      counter++;
    }
  }
  return counter;
}

// Set 2 Questions

// Remove Duplicates from an Array

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/**
  We are using Set to store arr. And because Set only store unique value it removes dublicate.
  Now we need to convert it back to Array. We can use spread operator with the variable in which Set was stored. But I have combined everything in one line.
*/

// Find the Second Largest Element in an Array
function secondLargest(arr) {
  let set = [...new Set(arr)];
  if (set.length >= 2) {
    const max = Math.max(...set);
    const filter = set.filter((item) => item !== max);
    return Math.max(...filter);
  } else {
    return null;
  }
}

// Find All Even Numbers in an Array
function evenNum(arr) {
  return arr.filter((item) => item % 2 === 0);
}

// Find the Sum of Elements at Even Indices
function sumAtEvenIndices(arr) {
  return arr
    .filter((_, index) => index % 2 === 0)
    .reduce((curr, total) => curr + total, 0);
}

// Rotate an Array by K Positions
function rotateArr(arr, k) {
  k = k % arr.length; //check if the k value is grater than arr length
  const endPart = arr.slice(-k);
  const startPart = arr.slice(0, arr.length - 1);
  return [...endPart, ...startPart];
}

console.log(rotateArr([1, 2, 3, 4, 5, 5, 6], 9));
