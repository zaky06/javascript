'use strict';
let loginForm = document.forms['login-form'];
let pwdIcon = document.getElementById('password-icon');

pwdIcon.addEventListener('click', changeIcon);

function changeIcon(target){
  // visibility_off
  // visibility
  if (this.innerText === 'visibility_off'){
      loginForm.elements.password
      .setAttribute('type', 'text');
      this.innerText = 'visibility';
  } else {
    loginForm.elements.password
    .setAttribute('type', 'password');
    this.innerText = 'visibility_off';
  }
}

let loginRules = {
  elem: loginForm.elements.login,
  minLength: 6,
  errorField: document.getElementById('login-error'),

};

let pwdRules = {
  elem: loginForm.elements.password,
  minLength: 10,
  errorField: document.getElementById('password-error'),

};

let validator = {
  checkMinLen(rule){
    if (rule.elem.value.length <= rule.minLength){
      rule.errorField.innerText = 'Минимальное количество символов: ' + rule.minLength;
      return false;
    }
    rule.errorField.innerText = "";
    return true;
  }
};

loginForm.elements.login.addEventListener("keyup", validator.checkMinLen.bind(null, loginRules));
loginForm.elements.password.addEventListener("keyup", validator.checkMinLen.bind(null, pwdRules));

// отправка
loginForm.addEventListener("submit", submitForm);
function submitForm(event){
  event.preventDefault();
  if (!validator.checkMinLen(loginRules) || !validator.checkMinLen(pwdRules)) console.log("нельзя отправить на сервер");
  else console.log("можно отправить на сервер");
}

// let someVar = ;
// someVar = ;
// function namedFunc() {} //точка с запятой не нужна
// if () {} //точка с запятой не нужна
// if () {} else {} //точка с запятой не нужна
// if () {} else if () {} //точка с запятой не нужна
// switch () {} //точка с запятой не нужна
// for (){} //точка с запятой не нужна
// while () {} //точка с запятой не нужна
// do {} while ();
// LoginForm.elements.password.setAttribute('type', 'text'); // в конце инструкций надо
