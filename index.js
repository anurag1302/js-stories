console.log("index works");

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
