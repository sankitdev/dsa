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
1. Reverse an Array
- We can reverse an Array by using `reverse()` method. We can directly attach the method on the array and the original array will reverse.
- With `reverse()` method it modifies the orginal array. It doesn't create a new array.

2. Find Maximum Element in an Array
- To find the Maximum Element in array we can use spread operator with the `Math.max(...arr)`

3. Sum of All Elements in an Array
- We can use `reduce()` method on an array it will sum all elements in an array.
- We can also use `for` loop to add, below is the example with `for` loop.

```javascript
const arr = [1,2,3,4,5,6]
let sum = 0;
for(i = 0; i<arr.length;i++){
  sum += arr[i]
}
console.log(sum)
```