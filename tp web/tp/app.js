function mlt(a, b) {
  y = a * b;
  return y;
}

function mlt2(c, d) {
  z = c * d;
  return z;
}

// console.log();
// let a = document.getElementById("num1").value;
// let b = document.getElementById("num2").value;
const c = document.getElementById("num3");
const d = document.getElementById("num4");

// console.log(val_c);

document.getElementById("btn-2").addEventListener("click", function (e) {
  let val_c = c.value;
  let val_d = d.value;
  e.preventDefault();
  // console.log("clicked");
  console.log(val_c, d);
  console.log(mlt2(a, b));
  console.log(c, d);
  document.getElementById("box2").innerHTML = mlt2(val_c, val_d);
});
