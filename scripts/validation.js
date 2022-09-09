const form = document.forms[0];
const { email } = form;
const msg = form.querySelector('.msg');

function validator(e) {
  e.preventDefault();

  if (email.value === email.value.toLowerCase()) {
    msg.textContent = 'Valid Email ✔';
    msg.classList.add('success');
    msg.classList.remove('fail');
    form.submit();
  } else {
    msg.innerHTML = '<strong>Required *:</strong> your Email must be in LowerCase Only ❌';
    msg.classList.remove('success');
    msg.classList.add('fail');
  }
}

form.addEventListener('submit', validator);
