const add_user = document.getElementById('add_user');
const modal = document.querySelector('.modal');
const modalde = document.querySelector('.modal_de');
const modaled = document.querySelector('.modal_ed');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const creat_user_form = document.getElementById('creat_user_form');
const info = document.getElementById('affiche');
const decon = document.getElementById('decon');
const supp_user = document.getElementById('supp_user');
const delet_user = document.getElementById('delet_user_form');

const edit_user = document.getElementById('edit_user');
const btn_edi = document.getElementById('btn_edi');
const closeed = document.getElementById('close');

const nv_user = document.getElementById('nv_user');

nv_user.addEventListener('click', function () {
  let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

  newacc = JSON.parse(localStorage.getItem('newaccounts'));
  alert(`vous avez ${newacc.length} demande`);
  newacc.forEach((acc, i) => {
    alert(`compte n°${i + 1} : ${acc.owner}`);
    let accp = prompt('si vous voulez accepté taper oui si non taper non');

    if (accp == 'oui') {
      accounts.push(acc);
      newacc.splice(i, 1);
    } else if (accp == 'non') {
      newacc.splice(i, 1);

      console.log('hai' + i);
    }
    localStorage.setItem('newaccounts', JSON.stringify(newacc));
    localStorage.setItem('accounts', JSON.stringify(accounts));
    location.reload();
  });
});

decon.addEventListener('click', function () {
  location.href = '../index.html';
});
add_user.addEventListener('click', function () {
  openModal();
  creat_user_form.addEventListener('submit', function (e) {
    e.preventDefault();
    const full_name = document.getElementById('user_name').value;
    const email = document.getElementById('user_email').value;
    const password = document.getElementById('user_mdp').value;
    const pin = document.getElementById('user_pin').value;

    const account = {
      owner: full_name,
      movements: [],
      interestRate: 1.2, // %
      pin: pin,
      password: password,
      movementsDates: [],
      currency: 'EUR',
      locale: 'fr-FR', // de-DE
      email: email,
    };
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    // accounts;
    accounts.push(account);
    localStorage.setItem('accounts', JSON.stringify(accounts));

    displayUsers();
    closeModal();

    creat_user_form.reset();
    location.reload();
  });
});
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
//modifier un utilisateur

edit_user.addEventListener('click', function () {
  modaled.classList.remove('hidden');
  overlay.classList.remove('hidden');

  accounts = JSON.parse(localStorage.getItem('accounts'));

  btn_edi.addEventListener('click', function (e) {
    e.preventDefault();
    accounts.forEach(account => {
      if (
        document.getElementById('user_name_edi').value == account.owner &&
        document.getElementById('user_mdp_edi').value == account.password
      ) {
        alert("si vous ne voulez pas changer entre l'encien valeur");
        account.owner = prompt('donner le nouveaux nom');
        account.pin = prompt('donner le nouveaux pin');
        account.password = prompt('donner le nouveaux mot de pass');
        account.email = prompt('donner une nouvelle adress email');
        console.log('dkhl');
      }
      localStorage.setItem('accounts', JSON.stringify(accounts));
      location.reload();
    });
  });
});

//supprimé un utilisateur
supp_user.addEventListener('click', function () {
  modalde.classList.remove('hidden');
  overlay.classList.remove('hidden');
  accounts = JSON.parse(localStorage.getItem('accounts'));
  // console.log(accounts);
  delet_user.addEventListener('submit', function (e) {
    e.preventDefault();
    accounts.forEach((account, i) => {
      if (
        document.getElementById('user_name_de').value == account.owner &&
        document.getElementById('user_mdp_de').value == account.password
      ) {
        console.log(i);

        console.log('dkhl');
        accounts.splice(i, 1);
        localStorage.setItem('accounts', JSON.stringify(accounts));
        modalde.classList.add('hidden');
        overlay.classList.add('hidden');
        document.getElementById('user_name_de').style.borderColor = 'green';
        document.getElementById('user_mdp_de').style.borderColor = 'green';
        location.reload();
      } else {
        document.getElementById('user_name_de').style.borderColor = 'red';
        document.getElementById('user_mdp_de').style.borderColor = 'red';
      }
    });
  });
});

//fonction pour les display
function displayUsers() {
  let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  accounts.forEach(account => {
    createUsernames(accounts);

    html = `
    <div class="nbr_user">
    <h4>user : ${account.owner}</h4>
    <h4>user login : ${account.username}</h4>
    <h4>pin :${account.pin}</h4>
    <h4>email :${account.email}</h4>
    <h4>password :${account.password}</h4>
  </div>
    `;
    info.insertAdjacentHTML('beforeend', html);
  });
}

displayUsers();
//fonction pour l'affichage
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', function () {
  modalde.classList.add('hidden');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
  modalde.classList.add('hidden');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
  modaled.classList.add('hidden');
  overlay.classList.add('hidden');
});
btnCloseModal.addEventListener('click', closeModal);

btnCloseModal.addEventListener('click', function () {
  modalde.classList.add('hidden');
  overlay.classList.add('hidden');
});
closeed.addEventListener('click', function () {
  modaled.classList.add('hidden');
  overlay.classList.add('hidden');
});
