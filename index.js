console.log("index works");

function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}

loadScript("scripts.js");

greet();

console.log("I am called after scripts.js is appended dynamically");
