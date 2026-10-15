// Task 1- Create Promise

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved after 2 seconds");
  }, 2000);
});

promise1.then((res) => console.log(res));



// Task 2 - Resolve vs Reject

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Number is greater than 10");
    } else {
      reject("Number is 10 or less");
    }
  });
}

// Example -
checkNumber(15)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


  // Task 3 - Fake Login System

function login(username, password) {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "1234") {
      resolve("Login successful");
    } else {
      reject("Invalid credentials");
    }
  });
}

// Example -
login("admin", "1234")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


  // Task 4 - Delay Function 

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited for ${ms} ms`);
    }, ms);
  });
}

// Example -
delay(3000).then((res) => console.log(res));