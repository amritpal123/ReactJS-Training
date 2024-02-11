var elem1 = document.getElementById("video1");
var elem2 = document.getElementById("video2");

function openFullscreen1() {
  if (elem1.requestFullscreen) {
    elem1.requestFullscreen();
  } else if (elem1.webkitRequestFullscreen) { /* Safari */
    elem1.webkitRequestFullscreen();
  } else if (elem1.msRequestFullscreen) { /* IE11 */
    elem1.msRequestFullscreen();
  }
}

function openFullscreen2() {
  if (elem2.requestFullscreen) {
    elem2.requestFullscreen();
  } else if (elem2.webkitRequestFullscreen) { /* Safari */
    elem2.webkitRequestFullscreen();
  } else if (elem2.msRequestFullscreen) { /* IE11 */
    elem2.msRequestFullscreen();
  }
}