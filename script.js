let sectionOne = document.querySelector(".section-one");
let imgsOne = sectionOne.querySelector(".imgs");
let imgsDivs = imgsOne.querySelector(".content");
let spans = document.querySelector(".spans");
let imgsOneContent = sectionOne.querySelectorAll("img");
let mainImgOne = document.querySelector(".main");

spans.addEventListener("click", function (n) {
  if (
    n.target.classList.contains("btn") &&
    !n.target.classList.contains("active")
  ) {
    let targetData = n.target.getAttribute("target-data");
    spans.querySelector(".active").classList.remove("active");
    n.target.classList.add("active");
    imgsDivs.querySelector(".active").classList.remove("active");
    imgsDivs.querySelector(targetData).classList.add("active");
  }
});
// console.log(imgsDivs.querySelector(".active"));

for (let i = 0; i < imgsOneContent.length; i++) {
  imgsOneContent[i].addEventListener("click", function () {
    mainImgOne.src = this.src;
  });
}
// ********************************
let sectionTwo = document.querySelector(".section-two");
let mainImgTwo = sectionTwo.querySelector(".main-two");
let imgsTwo = sectionTwo.querySelector(".imgs-two");
let imgsTwoContent = imgsTwo.querySelectorAll("img");
for (let i = 0; i < imgsTwoContent.length; i++) {
  imgsTwoContent[i].addEventListener("click", function () {
    mainImgTwo.src = this.src;
  });
}
// *************
let prices = document.querySelector(".prices");
let showImg = prices.querySelectorAll("span");
let overlayImg = document.querySelector(".overlay-img");
let closeBtn = overlayImg.querySelector(".close");

let overlayImgContent = overlayImg.querySelector("img");
for (let i = 0; i < showImg.length; i++) {
  showImg[i].addEventListener("click", function () {
    overlayImg.style.display = "block";
    overlayImgContent.src = this.nextElementSibling.src;
  });
}
closeBtn.onclick = function () {
  overlayImg.style.display = "none";
};

window.addEventListener("keydown", function (n) {
  if (n.keyCode == "27") {
    overlayImg.style.display = "none";
  }
});
