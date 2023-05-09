const nav = document.querySelector(".nav");
const handlehover = function (e) {
  e.preventDefault();

  if (e.target.classList.contains("link")) {
    const link = e.target;
    const sibling = link.closest(".nav").querySelectorAll(".link");

    sibling.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};
nav.addEventListener("mouseover", handlehover.bind(0.3));
nav.addEventListener("mouseout", handlehover.bind(1));
