const output = document.querySelector("#output");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
let isRunning = false;
let finalText = null;

function runAnimation(text) {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    output.innerText = output.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return finalText[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= finalText.length) {
      clearInterval(interval);
      isRunning = false;
    }

    iteration += 1 / 3;
  }, 30);

  isRunning = true;
}

function skipAnimation() {
  output.innerText = finalText;
  clearInterval(interval);
  isRunning = false;
}

function restartAnimation() {
  if (isRunning) {
    return;
  }

  runAnimation(finalText);
}

const xhr = new XMLHttpRequest();
xhr.open("GET", output.dataset.src);
xhr.onload = () => {
  if (xhr.status === 200) {
    finalText = xhr.responseText;
    output.innerText = finalText;
  } else {
    console.error("Error loading text file.");
  }
};
xhr.send();

const skipBtn = document.querySelector(".skip");
skipBtn.addEventListener("click", skipAnimation);

const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", restartAnimation);

runAnimation(output.innerText);
