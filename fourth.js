// This is a more complete example of the JS Promise API, including using the
// second function argument of .then() and the .catch() method. It pretends to
// look up your name in a database, and it fails half of the time. When it
// fails, it will either fail to find your name, or fail with an error.

var syncData = "My name is: ";

new Promise(function (resolve, reject) {
  var runningTime = Math.random() * 100 + 100;

  if (Math.random() <= 0.5) { // Resolve this promise 50% of the time
    setTimeout(function () {
      resolve("Kevin Caccamo");
    }, runningTime);
  } else {

    if (Math.random() <= 0.5) {
      setTimeout(function () {
        reject("I can't find your name in the database!");
      }, runningTime);
    } else {

      setTimeout(function () {
        reject(new Error("Bloody Hell!"));
      }, runningTime);
    }
  }

}).then(function (asyncData) {
  console.log(syncData + asyncData);
}, function (reason) {
  console.log(reason);
}).catch(function (error) {
  console.error(error);
});
