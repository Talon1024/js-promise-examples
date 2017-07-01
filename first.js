// First Promise experiment

var thePromise = new Promise(function(res, rej) {
  console.log("First promise: yes");
  res("yes");
}).then(function (value) {
  console.log("Value from first promise:", value, " In second promise: abc");
  return new Promise(function (res, rej) {
    setTimeout(function () {
      res("abc");
    }, 1);
  });
}).then(function (value) {
  console.log("Value from second promise:", value, " In third promise: def");
  return new Promise(function (res, rej) {
    setTimeout(function () {
      res("def");
    }, 1);
  });
}).then(function (value) {
  console.log("Value from third promise:", value);
});

// Expected console output:
//
// First promise: yes
// Value from first promise: yes In second promise: abc
// Value from second promise: abc In third promise: def
// Value from third promise: def