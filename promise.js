// KC's JS Promise experiments

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

// 2

var thePromise = new Promise(function(res, rej) {
  console.log("First promise: yes");
  res("yes");
}).then(new Promise(function (res, rej) {
    setTimeout(function () {
      console.log("Second promise: abc");
      res("abc");
    }, 1);
  });
}).then(function (value) {
  console.log("Third promise:", value);
});

// 3

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