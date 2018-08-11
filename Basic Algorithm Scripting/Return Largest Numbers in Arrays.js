/*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code. */

//Approach Using For Loop

function largestOfFour(arr) {
  let newArr=[];
  for(let a=0;a<arr.length;a++)
  {
    arr[a].sort(function(a,b){return b - a}); //Sorts all the inside arrays in decsending order.
    newArr.push(arr[a][0]); //Pushes the first element to the new array.
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//Approach using Map 


function largestOfFour(arr) {
  return arr.map(function(subArray){
    subArray.sort(function(a,b){return b-a});
    return subArray[0];
  })
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);