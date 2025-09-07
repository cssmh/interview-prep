function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();
counter();
counter();

// inner() has access to count even after outer() has finished.
// This allows you to maintain private state in functions.

// Why important:
// Closures are everywhere in JS — event handlers, callbacks, functional programming, and state management.
