// sudoku problem
let arr = [0, 2, 0, 7, 0, 9, 1, 0, 0];
const sudokuSolver = (arr) => {
  if (arr.length !== 9) {
    console.log("Array length must be 9");
    return;
  }
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] === 0) {
      for (let b = 0; b < arr.length; b++) {
        if (!arr.includes(b + 1)) {
          arr[a] = b + 1;
        }
      }
    }
  }
  return arr;
};
const sudoKuArray = sudokuSolver(arr);
console.log("SudoKu => ", sudoKuArray);
