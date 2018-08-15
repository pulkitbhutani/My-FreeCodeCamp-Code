/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code. */

function titleCase(str) {
  str = str.toLowerCase(); //for normalization, it will make the whole string to lowercase.
  let arr = str.split(" "); //splits the string on spaces and makes a array.
  for(let i =0;i<arr.length; i++)
  {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); //arr[i].charAt(0).toUpperCase() will only return the first character of the array in uppercase and not the whole array so it needs to be concatenated with rest of the chars/array, so slice is used to add rest of the array/chars by removing first lowercase letter.
  }

  console.log(arr);
  return arr.join(' ');
}

titleCase("I'm a little tea pot");