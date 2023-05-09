const table = document.getElementById("table");
const total_coef = document.getElementById("total_coef");
const total_credit = document.getElementById("total_credit");
const total_moy = document.getElementById("total_moy");
const result = document.getElementById("result");
const nom_etud = document.getElementById("title");
alert("cette page permet d'établir le bulletin de note d'un etudiant");
let nom = prompt("donner le nom l'etudiant");
let nom_modul,
  coef,
  nbr_credit,
  note,
  moyenne = 1,
  somme = 0,
  som_coef = 0,
  resulta = 0,
  tot_crd = 0;
let x = parseInt(prompt("donner le nombre de mdules : "));
for (i = 0; i < x; i++) {
  nom_modul = prompt("donner le nom du module N " + (i + 1) + ":");
  coef = parseInt(prompt("donner le coefficient "));
  nbr_credit = parseInt(prompt("donner le nombre de crédit"));
  tot_crd = tot_crd + nbr_credit;
  note = parseFloat(prompt("donner la note de l'examen : "));
  resulta = note * coef;
  somme = somme + resulta;
  som_coef = som_coef + coef;
  html = `
         <tr>
            <th>${nom_modul}</th>
            <td>${coef}</td>
            <td>${nbr_credit}</td>
            <td>${note}</td>
            <td>${resulta}</td>
          </tr>
`;
  table.insertAdjacentHTML("beforeend", html);
}
moyenne = somme / som_coef;
nom_etud.innerHTML = nom;
total_coef.innerHTML = som_coef;
total_credit.innerHTML = tot_crd;
total_moy.innerHTML = moyenne;
const resul = moyenne >= 10 ? "admis" : "ajourné";
result.innerHTML = resul;
