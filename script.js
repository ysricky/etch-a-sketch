const mode = document.querySelector(".mode");
const toggle = document.querySelector(".toggle");
const canvas = document.querySelector(".canvas");
const btnClear = document.querySelector("button");
let rainbow = false;
let size;

// function for generating canvas and generating pixel trail with chosen color
const generateCanvas = (size = 100) => {
  for (i = 0; i < size * size; i++) {
    const createPixel = document.createElement("div");
    canvas.appendChild(createPixel);
  }

  const pixel = canvas.querySelectorAll("div");

  pixel.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      const val1 = Math.floor(Math.random() * 255);
      const val2 = Math.floor(Math.random() * 255);
      const val3 = Math.floor(Math.random() * 255);
      e.style.backgroundColor = "black";
      if (rainbow) {
        e.style.backgroundColor = `rgb(${val1}, ${val2}, ${val3})`;
      }
    });
  });
};

//Show default canvas
generateCanvas(size);

//Toggle for change color mode (clearing canvas when activated)
mode.addEventListener("click", () => {
  mode.classList.toggle("mode-on");
  toggle.classList.toggle("toggle-on");
  canvas.innerHTML = "";
  if (rainbow === false) {
    rainbow = true;
  } else {
    rainbow = false;
  }
  generateCanvas(size);
});

//Button for clear and resize canvas
btnClear.addEventListener("click", () => {
  canvas.innerHTML = "";
  size = parseInt(
    prompt(
      "Default value is 100 x 100 pixels. Please enter value between 1 - 100 pixels:"
    )
  );
  if (size > 100 || !size) {
    size = 100;
  }
  generateCanvas(size);
  canvas.setAttribute(
    "style",
    `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`
  );
});
