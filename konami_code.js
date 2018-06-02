const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  // your code here
  document.addEventListener('keydown', onKeyDownHandler);
}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === codes[index]) {
    index++;

    if (index === codes.length - 1) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
