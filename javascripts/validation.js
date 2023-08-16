function emailValidation() {
  const form = document.getElementById('form');
  const emailComfirmField = document.getElementById('email_confirm');
  const element = document.createElement('p');
  const message = document.createTextNode("El email no coincide");
  const contentField = document.getElementById('content_field');
  element.appendChild(message);
  element.setAttribute('id', 'alert');
  element.classList.add("alert_color");

  emailComfirmField.addEventListener('input', () => {
    if (form.email.value !== emailComfirmField.value) {
      if (!document.getElementById('alert')) {
        contentField.parentNode.insertBefore(element, contentField);
        emailComfirmField.classList.add("alert_bg");
      }
    } else {
      emailComfirmField.classList.remove("alert_bg");
      element.parentNode.removeChild(element);
    }
  });
}

window.onload = function() {
  emailValidation();
};
