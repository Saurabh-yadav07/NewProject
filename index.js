let modeBtn = document.querySelector("#mode");
modeBtn.classList.add("btnDesign");
let body = document.querySelector("body");
let currentMode = "light";
modeBtn.addEventListener("click", () => {
  if (currentMode === "light") {
    body.classList.add("dark");
    currentMode = "dark";
    modeBtn.innerText = "Light Mode";
  } else {
    body.classList.remove("dark");
    currentMode = "light";
    modeBtn.innerText = "Dark Mode";
  }
});
