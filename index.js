function hasTargetSum(array, target) {
  const result = [];
  if (array.length < 2){
    return false;
  }
  for(let i = 0 ; i < array.length ; i++ ){
    for(let j = 0; j < array.length ; j++){
      if(i !== j){
        const sum = array[i] + array[j];
        result.push(sum);
      }
    }
  }
  const checkResult = result.map (el => el === target);
  const findTrueInCheckResult = checkResult.find(el => el);
  return findTrueInCheckResult === true ? true : false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  
  result = []
  sum = 0
  if (length of array < 2){
    return false
  }else{

    for(through rows){
      for(through cols){
        if(row !== col){
          sum = row + col
          push(sum) to result array
        }
      }

      for(through result array){
        if(element of result === target){
          return true
        } else {
          return false
        }
      }

    }
  }

*/

/*
  Add written explanation of your solution here
  1- first check if length of array less than 2 then return false
  2- else loop through the array 
  3- check if row not equal col if true sum row to col and assign in new variable(sum) and then add it to new array(result)
  4- loop over (result) array to find if any element equal the target item
  5- if result array has one element eqaul the target return true else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
