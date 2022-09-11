const sForm = document.querySelector('.form');

function getData() {
  const name = sForm.name.value;
  const email = sForm.email.value;
  const message = sForm.message.value;
  const userData = {
    name: `${name}`,
    email: `${email}`,
    message: `${message}`,
  };

  return userData;
}

function generateData() {
  if (localStorage.getItem('storage')) {
    window.localStorage.clear();
  }

  window.localStorage.setItem('storage', JSON.stringify(getData()));
}

function fillDataInput(objData) {
  const userData = JSON.parse(objData);
  sForm.name.value = userData.name;
  sForm.email.value = userData.email;
  sForm.message.value = userData.message;
}

function refresh() {
  if (window.localStorage.getItem('storage')) {
    fillDataInput(window.localStorage.getItem('storage'));
  }
}

sForm.addEventListener('submit', generateData);
window.addEventListener('load', refresh);
