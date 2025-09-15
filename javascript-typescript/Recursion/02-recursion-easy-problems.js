//Easy Problems on Recursion in JS

//Print 1 to n without using loops
//You are given an integer n. Print numbers from 1 to n without the help of loops.

function printNumbers(n, i=1){
  //base Condition
  if(i>n){
    return;
  } 
  console.log(i)
  printNumbers(n, i+1);
}

printNumbers(10)

//Output: 1 2 3 4 5 6 7 8 9 10

//Print n to 1 without loop

function printNumbersReverse(n){
  if(n<1)
  return 1;
  console.log(n);
  printNumbersReverse(n-1)
  
}

printNumbersReverse(10)

//Output: 10 9 8 7 6 5 4 3 2 1

//Mean of array using recursion

//Given an array of numbers, you are required to calculate the mean (average) using recursion.
//Note: The mean of an array is the sum of its elements divided by the number of elements in the array.

function MeanOfArray(Arr, i=0, sum=0){
  if(i>=Arr.length){
    return sum/Arr.length; 
  }
  return MeanOfArray(Arr, i+1, sum + Arr[i])
}

console.log(MeanOfArray([1, 2, 3]))

//Output: 2

//Sum of natural numbers using recursion

//Given a number n, find sum of first n natural numbers. To calculate the sum, we will use a recursive function recur_sum().

function sumNnaturalNums(n, sum=0){
  if(n<1){
    return sum;
  }
  return sumNnaturalNums(n-1, n+sum);
}

console.log(sumNnaturalNums(6))

//Output: 21

//Sum of array elements using recursion

//Given an array of integers, find sum of array elements using recursion. 

function sumOfArr(Arr, i=0, sum =0){
  if(i>=Arr.length){
    return sum;
  }
  return sumOfArr(Arr, i+1, Arr[i]+sum)
}

console.log(sumOfArr([1, 2, 3]))
//Output: 6

