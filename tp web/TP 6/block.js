function blockaccess(event) {
  if ((event.keyCode = 17 && event.keyCode == 85)) {
    event.preventDefault();
    console.log("clicked");
  }
}

document.addEventListener("keydown", blockaccess);
document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("contextmenu", (event) => event.preventDefault());
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute("href");
    // console.log("clicked");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
