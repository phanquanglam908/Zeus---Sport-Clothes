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