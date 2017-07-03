// Second promise example
var thePromise = new Promise(function(res, rej) {
  console.log("First promise: yes");
  res("yes");
}).then(function(value) {
  console.log("Received value:", value);
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log("Second promise: abc");
      res("abc");
    }, 1);
  });
}).then(function (value) {
  console.log("Received value:", value);
});

// Expected console output:
//
// First promise: yes
// Received value: yes
// Second promise: abc
// Received value: abc