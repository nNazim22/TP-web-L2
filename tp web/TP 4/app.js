const test = document.getElementById("test");
let local = window.location.href;
let url = new URL(local);
let parm = new URLSearchParams(url.search);
let nom = parm.get("name");
let poid = parseInt(parm.get("mizan"));
let taille = parseFloat(parm.get("toule"));

let imc = poid / taille ** 2;
if (imc > 0) {
  html = `
 <p>Nom :${nom}</p>
 <p>Poid : ${poid}</p>
 <p>Taille : ${taille}</p>
 <p>L'IMc de ${nom} = ${imc.toFixed(2)}</p>
 `;
  test.insertAdjacentHTML("beforeend", html);
}
