const codes = [
  38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

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
