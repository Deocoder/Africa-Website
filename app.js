// Navbar
function openNav() {
  document.getElementById("myNav").style.height = "100%"
  console.log(document.getElementById("myNav"))
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%"
}

const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", checkboxes)

checkboxes()

function checkboxes() {
  const trigger = (window.innerHeight / 5) * 4

  boxes.forEach((box) => {
    const boxtop = box.getBoundingClientRect().top

    if (boxtop < trigger) {
      box.classList.add("show")
    } else {
      box.classList.remove("show")
    }
  })
}

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider", {
    type: "loop",
    autoplay: true,
    interval: 1000,
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider2", {
    type: "loop",
    autoplay: true,
    interval: 1000,
  }).mount();
});
