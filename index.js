console.log("index works");

//Using callbacks
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    callback();
  };
  document.head.append(script);
}

loadScript("scripts.js", function () {
  greet();
});

console.log("I am called after scripts.js is appended dynamically");

/**************************/
//Using Promises

function loadScript2(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
      resolve(script);
    };
    script.onerror = function () {
      reject(new Error(`Something went wrong in ${src} invocation`));
    };
    document.head.append(script);
  });
}

let promise = loadScript2("scripts.js");
console.log(promise);

promise
  .then((res) => {
    console.log(res);
    greet();
  })
  .catch((err) => {
    console.log(err);
  });

/*******************/
//Usage of fetch
var apiData = "";

const API_URL = "https://randomuser.me/api/";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log("data from api", data);
    apiData = data.results[0];
  })
  .then(() => {
    console.log(apiData);
  });

console.log("apiData.Email", apiData.email);
