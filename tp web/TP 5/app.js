var image = document.querySelector("#image");
const img_flx = document.querySelectorAll(".image");
const h2 = document.getElementById("h2");
const affiche = document.getElementById("affiche");

const btn = document.querySelectorAll(".btn");
let nbr = 1;
img_flx.forEach(function (img) {
  img.addEventListener("click", function () {
    console.log(img.name);

    image.src = `./image-${img.name}.jpg`;
    h2.innerHTML = `image ${img.name}`;
    nbr = img.name * 1;
  });
});

btn.forEach(function (bt) {
  bt.addEventListener("click", function () {
    if (bt.name == "sup") {
      affiche.style.visibility = "hidden";
    }
    if (bt.name == "aff") {
      affiche.style.visibility = "visible";
    }
    if (bt.name == "sui" && nbr <= img_flx.length) {
      if (nbr == 3) {
        console.log(nbr);
        nbr = 1;
        image.src = `./image-${nbr}.jpg`;
        h2.innerHTML = `image ${nbr}`;
      } else {
        console.log(nbr);
        nbr++;
        image.src = `./image-${nbr}.jpg`;
        h2.innerHTML = `image ${nbr}`;
      }
    }

    if (bt.name == "pre" && nbr >= 1) {
      if (nbr == 1) {
        console.log(nbr);
        nbr = 3;
        image.src = `./image-${nbr}.jpg`;
        h2.innerHTML = `image ${nbr}`;
      } else {
        console.log(nbr);
        nbr--;
        image.src = `./image-${nbr}.jpg`;
        h2.innerHTML = `image ${nbr}`;
      }
    }
  });
});
