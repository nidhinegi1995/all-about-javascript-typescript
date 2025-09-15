//How do you implement a binary search in an array?

//A binary search can be implemented on a sorted array to efficiently find the index of a specific element.
//The algorithm works by repeatedly dividing the search interval in half until the target value is found or the interval is empty.

function binarySearch(arr: number[], target:any){
    let left = 0;
    let right = arr.length -1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if (arr[mid]=== target){
            return mid;
        }
        else if(arr[mid]<target){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return -1;
}

let sortedArr: number[] = [1, 2, 44, 45, 67, 109, 111]

console.log(binarySearch(sortedArr, 44))
//Output: 2 (index of the element 44 in the sorted array)