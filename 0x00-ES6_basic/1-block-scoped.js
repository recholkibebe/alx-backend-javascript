// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;  // Block-scoped `task`, different from the outer `task`
    let task2 = false;  // Block-scoped `task2`, different from the outer `task2`
  }

  return [task, task2];
}
