function stringChop(str, size) {
  if (!str) return []; 

  let arr = [];
  let left = 0;
  size = Number(size); // convert chunk size to number

  while (left < str.length) {
    arr.push(str.slice(left, left + size));
    left += size;
  }

  return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
