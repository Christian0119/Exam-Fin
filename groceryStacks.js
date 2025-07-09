let groceryStack = [];

function peek() {
  if (groceryStack.length === 0) {
    console.log("Stack is empty");
    return null;
  } else {
    console.log("Top item is:", groceryStack[groceryStack.length - 1]);
    return groceryStack[groceryStack.length - 1];
  }
}

function pushItem(item) {
  groceryStack.push(item);
  console.log(`Item pushed: ${item}`);
  peek();
  console.log("Updated Stack:", groceryStack);
}

function popItem() {
  let removed = groceryStack.pop();
  console.log(`Item popped: ${removed}`);
  peek();
  console.log("Updated Stack:", groceryStack);
}

for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item ${i + 1}:");
  pushItem(item);
}

// Uncomment to test pop
// popItem();
