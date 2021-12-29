// -------------------------login & signup-------------------------
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
   loginForm.style.marginLeft = "-50%";
   loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
   loginForm.style.marginLeft = "0%";
   loginText.style.marginLeft = "0%";
});

// ---------------------------- Xu li dang nhap ------------------------------------
document.addEventListener("DOMContentLoaded", () => {
   // Ham bao loi
   function setFormMessage(formElement, type, message) {
      const messElement = formElement.querySelector(".form-message");
      messElement.textContent = message;
      messElement.classList.remove("form-message--success", "form-message--error");
      messElement.classList.add(`form-message--${type}`);
   }

   function goToPage() {
      window.location.href = "index.html";
   }

   function onFormSubmit(e) {
      var username = inputUsername.value;
      var password = inputPassword.value;
      if (username == CORRECT_USER && password == CORRECT_PASS) {
         setFormMessage(loginForm, "success", "Login successfully. You're Entering ...");
         setTimeout(goToPage, 3000);
      } else {
         setFormMessage(loginForm, "error", "Login Failed, please check again!")
      }
   }

   const loginForm = document.querySelector('#form-login');
   var CORRECT_USER = 'truonghuuthicm@gmail.com';
   var CORRECT_PASS = '123456789';
   var inputUsername = document.getElementById('username');
   var inputPassword = document.getElementById('password');
   var formlogin = document.getElementById('form-login');

   loginForm.addEventListener("submit", e => {
      e.preventDefault();
      setFormMessage(loginForm, "error", "Invalid Email/Password, please check again!");
   });

   if (formlogin.attachEvent) {
      formlogin.attachEvent('submit', onFormSubmit);
   } else {
      formlogin.addEventListener('submit', onFormSubmit);
   }
});
// ---------------------------xulidangki-------------------=
function taotaikhoan() {
   var FullName = document.getElementById("fullname").value;
   var emailadd = document.getElementById("emailadd").value;
   var password = document.getElementById("txtPassword").value;
   var confirmPassword = document.getElementById("txtConfirmPassword").value;
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

   if(FullName ==""){
      alert("Please Enter FullName!"); return;
   }if(filter.test(emailadd)==""){
   alert("Please Enter Email!");return;

   }if(password ==""){
      alert("Please Enter Password!");return
   }
   if(confirmPassword ==""){
      alert("Please Enter Confirm Password!");return
   }
   if(password != confirmPassword) {
       alert("Passwords do not match!");
       return false;
   }
    alert("Sign up for Success");
      return true;
}