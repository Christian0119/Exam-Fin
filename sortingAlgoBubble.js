let bubbleArr = [];

for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt(`Enter number ${i + 1} for bubble sort:`));
  bubbleArr.push(num);
}

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log("Swapped:", arr[j], arr[j + 1]);
      }
    }
  }
  return arr;
}

let sortedBubble = bubbleSort(bubbleArr);
console.log("Sorted Array:", sortedBubble);
