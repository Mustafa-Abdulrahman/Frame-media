let about = document.querySelector(".about");
let sec = about.querySelectorAll(".sec");
for (let i = 0; i < sec.length; i++) {
  sec[i].addEventListener("click", function (n) {
    if (n.target.nodeName == "H1") {
      this.classList.toggle("active");
    }
  });
}
