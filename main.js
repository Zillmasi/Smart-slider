var imgList = Array.from(document.querySelectorAll("img"));
var layerElm = document.querySelector(".layer");
var closeIcon = document.getElementById("close");
var mainImg = document.querySelector(".layer .img");
var nextIcon = document.querySelector("#next");
var prevIcon = document.querySelector("#prev");

var currentIndex;

for (var i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    currentIndex = imgList.indexOf(e.target);
    var src = e.target.getAttribute("src");
    mainImg.style.backgroundImage = `url(${src})`;
    layerElm.classList.replace("d-none", "d-flex");
  });
}

closeIcon.addEventListener("click", function () {
  layerElm.classList.replace("d-flex", "d-none");
});

nextIcon.addEventListener("click", function () {
  currentIndex++;
  var nextImg = imgList[currentIndex];
  if (nextImg === undefined) {
    currentIndex = 0;
    nextImg = imgList[currentIndex];
  }

  var src = nextImg.getAttribute("src");
  mainImg.style.backgroundImage = `url(${src})`;
});

prevIcon.addEventListener("click", function () {
  currentIndex--;
  var prevImg = imgList[currentIndex];
  if (prevImg === undefined) {
    currentIndex = imgList.length - 1;
    prevImg = imgList[currentIndex];
  }

  var src = prevImg.getAttribute("src");
  mainImg.style.backgroundImage = `url(${src})`;
});

layerElm.addEventListener("click", function (e) {
  layerElm.classList.replace("d-flex", "d-none");
});

mainImg.addEventListener("click", function (e) {
  e.stopPropagation();
});

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "Escape":
      layerElm.classList.replace("d-flex", "d-none");
      break;

    case "ArrowRight":
      currentIndex++;
      var nextImg = imgList[currentIndex];
      if (nextImg === undefined) {
        currentIndex = 0;
        nextImg = imgList[currentIndex];
      }

      var src = nextImg.getAttribute("src");
      mainImg.style.backgroundImage = `url(${src})`;
      break;

    case "ArrowLeft":
      currentIndex--;
      var prevImg = imgList[currentIndex];
      if (prevImg === undefined) {
        currentIndex = imgList.length - 1;
        prevImg = imgList[currentIndex];
      }

      var src = prevImg.getAttribute("src");
      mainImg.style.backgroundImage = `url(${src})`;
      break;
  }
});
