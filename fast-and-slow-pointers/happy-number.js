// completed 05-15-2022
// time: O(N); space: O(N);
const find_happy_number = function(num) {
  if (num === 0) return false;
  const sumSquareFunction = sumSquareCache();
  let fastPointer = num, slowPointer = num, skipSlowPointer = true;
  
  while (true) {
    fastPointer = sumSquareFunction(fastPointer);
    slowPointer = skipSlowPointer ? slowPointer : sumSquareFunction(slowPointer);
    skipSlowPointer = !skipSlowPointer;
    if (fastPointer === slowPointer) return false;
    if (fastPointer === 1) return true;
  }
};

const sumSquareCache = () => {
  const cache = {};
  return (num) => {
    if (!Object.prototype.hasOwnProperty.call(cache, num)) cache[num] = sumSquare(num);
    return cache[num];
  }
}

const sumSquare = (num) => {
  const numAsStrings = [...num.toString()];
  return numAsStrings.reduce((prevNum, currStr) => {
      const currNum = parseInt(currStr);
      return prevNum + currNum * currNum
    }, 0);
}


console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)
