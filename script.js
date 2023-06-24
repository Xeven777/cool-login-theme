var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
btnLogin.onclick = function () {
  idLogin.innerHTML = '<p>We\'re happy to see you again, </p><h1>' + username.value + '</h1>';
}
let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('dark');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == 'dark') {
    document.getElementById('switcher-id').href = './themes/styledg.css';
  } else if (theme == 'pink') {
    document.getElementById('switcher-id').href = './themes/stylepink.css';
  } else if (theme == 'blue') {
    document.getElementById('switcher-id').href = './themes/styleblue.css';
  }
  else if (theme == 'venom') {
    document.getElementById('switcher-id').href = './themes/stylevenom.css';
  }
  localStorage.setItem('style', theme);
}
