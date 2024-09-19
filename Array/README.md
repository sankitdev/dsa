# Working on Array

- Array is data structure that holds a collections of elements, in a contiguous block of memory.
- Arrays are indexed, each element can be accessed by its position in the array, starting with index 0.

## Common Array Operation

1. Transversal

- Visiting each element in the array one by one.
- Time Complexity: O(n)

```javascript
let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### Common Questions

1. **Reverse an Array**

- We can reverse an Array by using `reverse()` method. We can directly attach the method on the array and the original array will reverse.
- With `reverse()` method it modifies the orginal array. It doesn't create a new array.

2. **Find Maximum Element in an Array**

- To find the Maximum Element in array we can use spread operator with the `Math.max(...arr)`

3. **Sum of All Elements in an Array**

- We can use `reduce()` method on an array it will sum all elements in an array.
- We can also use `for` loop to add, below is the example with `for` loop.

```javascript
const arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
```

4. **Check if Element Exists in an Array**

- To check we can use `includes()` method with an array. It will return boolean.
- If the element exists, it return `true` or `false`

5. **Count Occurrences of a Given Element in an Array**

- To count we can have a variable which will hold the `occurances`. Below is self explanatory example:-

```javascript
function occur(arr, num) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      counter++;
    }
  }
  return counter;
}
```

6. **Remove Duplicates from an Array**

- To remove duplicates we can use `Set`.
- Set is a collection of unique values that can be iterated over and has operations like adding, removing, and checking for membership.
- Now we created a new set with `new` keyword and pass the `arr` and it will return new arrays which will contain unique elements.

7. **Find the Second Largest Element in an Array**

- In this, I started with finding the first largest using `Math.max()`.
- But we need to also look for edge case like if array is empty or it has some duplicates. So to reduce time complexity we can do these checks first.
- We can use `Set` to remove dublicate and then convert it to array and then use checks.
  Below is the full Code:-

```javascript
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
```

8. **Find All Even Numbers in an Array**

- This is an easy task we can just use `filter()` method to filter out elemnet which are divisible by 2.

9. **Find the Sum of Elements at Even Indices**

- In this we have to sum element of even indexes. We can first use `filter()` method then chain it with `reduce()` method.

10. **Rotate an Array by K Positions**

- Rotating an array means shifting the elements of the array to the right (or left) by a certain number of positions.
- After shifting, elements that move past the end of the array wrap around and come back to the beginning.
- For example, if we have an array:

```bash
[1, 2, 3, 4, 5]
```

- And if we rotate this array to the **right by 2 position**, it would become:

```bash
[4, 5, 1, 2, 3]
```

- We use `slice()` method to cut the portion of array.
- The `slice()` method creates a new array containing a portion of the new array. It doesn't modify the original array.
  - **start:** The index at which to start extracting elements.
  - **end:** The index (exclusive) at which to end extracting elements.
- If start is omitted, it defaults to 0. If end is omitted, it defaults to the length of the array.

### Important Points for Slice

- If `start` is greater than or equal to `end`, an empty array is returned.
- Negative values for` start` and `end` can be used to count from the end of the array.
- For example, `array.slice(-2)` extracts the last two elements.
