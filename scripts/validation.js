const collabBtns = document.querySelectorAll('.primary-btn[type="submit"]');

collabBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText('adeelguitoun@gmail.com');
    const msgClass = `.msg-${btn.getAttribute('id')}`;
    const msg = document.querySelector(msgClass);
    msg.classList.add('success');
    console.log('MSG: ', msg);
    msg.innerHTML = 'Email Copied to clipboard';

    setTimeout(() => {
      msg.innerHTML = '';
      msg.classList.remove('success');
    }, 1000);
  }),
);
