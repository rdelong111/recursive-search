function recursiveSearch(arr, target) {
  if (arr[0] === target) {
    return true;
  }
  else if (arr.length <= 1) {
    return false;
  }
  else {
    arr.shift();
    return recursiveSearch(arr, target);
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 1));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

/*
if the first number in the array equals to the target
  return true
if previous false and the array length is less than or equal to 1
  return false
if previous is false
  remove the first element of the array
  return the recursiveSearch function with same arguments
*/

/*
The if statement checks if the first element in the array equals the target and returns true.
The else if statement checks if the array length is less than or equal to 1 after the 'if' fails and return false.
The else removes the first element of the array and then returns the recuresiveSearch function with the same arguments to 'iterate' through the original array.
*/