// -------------------------Product Detail pick Img-------------------------
var mainImg = document.getElementById('mainImg');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function () {
   mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function () {
   mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
   mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
   mainImg.src = smallImg[3].src;
}

// -------------------------Product Silder-------------------------
$('.owl-carousel').owlCarousel({
   loop: false,
   margin: 10,
   nav: false,
   responsive: {
      0: {
         items: 2
      },
      600: {
         items: 3
      },
      1000: {
         items: 4
      }
   }
})