/*The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.
For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all) 

//=======================================================================================================================
function getMaxSubSum(arr){
    let maxSum=0;
    for(let i=0; i<arr.length; i++){
        sumFixedStart=0;
        for (let j = i; j < arr.length;j++){
            sumFixedStart +=arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);



       
    }
}
return maxSum;

}
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
*/

//==========================================================================================================================

//Arrays methods

let arr= ["I", "am", "Abhishek", "Giri"];

arr.push("programmer"); // add new element to the end of the array
arr.shift(); //remove tyhe first elemnt
arr.unshift("this"); // add element from the begning of the array
arr.pop(); // pop out last elemet of the array

console.log(arr);

//splice: "delete" key word works fine but it only delete the element not the occupied space .
//splice will delete the occupied space also.

delete arr[1]; //["this", null, "Abhishek", "Giri"];
let len= arr.length;
console.log(arr);
console.log(len);
arr.splice(1, 1); // from index 1 remove 1 element : ["this", "Abhishek", "Giri"];

console.log(arr);
arr.splice(1,3); // start from index 1 and delete till index 3
console.log(arr);

arr.splice(1,2, "don", "abhi","ji"); // "this don abhi ji"
console.log(arr);


//slice: similar to splice but it egnore first and last index given


console.log(arr.slice(1,2));// print the starting index and egnore the end index:" don"

let arr1= [1,2,3,4];

let arr2= arr1.concat([7,5]);
console.log(arr2);

//searching in array

/*The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax
 and do essentially the same as their string counterparts, but operate on items instead of characters:

arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.lastIndexOf(item, from) – same, but looks for from right to left.
arr.includes(item, from) – looks for item starting from index from, returns true if found. */
let arr3 = [1, 0, false];

console.log( arr3.indexOf(0) ); // 1
console.log( arr3.indexOf(false) ); // 2
console.log( arr3.indexOf(null) ); // -1

console.log( arr3.includes(1) ); // true

//===========================================================================================================

//forEach: method- get the value in araay one by one

let nums= [1,22,3,4,5,6];

nums.forEach((n,i,nums)=>{ //you can also pass index and array itself
    console.log(n,i, nums); // it will print the elements on eby one.with index number as well as array itself
   // console.log(n*2); // multiply by 2 and gives output
    
})

//filter: The find method looks for a single (first) element that makes the function return true.
/*

If there may be many, we can use arr.filter(fn).

The syntax is similar to find, but filter returns an array of all matching elements:

let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
*/

console.log("filter , map and reduce example ");
let nums1= [1,22,3,4,5,6];
console.log(nums1.filter((n)=> n%2===0)); // 22,4,6: return the true values in the array

//map: take a value and change it 
console.log(nums1.map(n => n*2)); // takes the arrays previous numbers and change it by multiply by 2.


//The methods arr.reduce and arr.reduceRight also belong to that breed, 
//but are a little bit more intricate. They are used to calculate a single value based on the array.

console.log(nums1.reduce((a,b)=> a+b)); //41


