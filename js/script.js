// scroll down menubar
window.addEventListener('scroll', function () {
   var header_top = document.querySelector('header');
   header_top.classList.toggle('sticky', window.scrollY > 100);
})

var scroll1 = window.pageYOffset;
window.onscroll = function () {
   var scroll2 = window.pageYOffset;
   if (scroll1 > scroll2) {
      document.querySelector('header').style.top = "0";
   } else {
      document.querySelector('header').style.top = "-100px";
   }
   scroll1 = scroll2;
}


// -------------------------loginsignup-------------------------
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
