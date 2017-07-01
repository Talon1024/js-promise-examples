// Third Promise experiment

// Function that returns a promise
function getThing(thing) {
  return new Promise(function(res, rej) {
    setTimeout(function() {
      res(thing);
    }, 1);
  });
}

getThing("abc").then(function(thing) {
  console.log("Promise 1:", thing);
  return getThing("def");
}).then(function(thing) {
  console.log("Promise 2:", thing);
  return getThing("ghi");
}).then(function(thing) {
  console.log("Promise 3:", thing);
});

// Expected console output:
//
// Promise 1: abc
// Promise 2: def
// Promise 3: ghi