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

// -------------------------------------------------xulishoppingcart---------------------
let carts = document.querySelectorAll('.bx-cart');
let product = [
   
{
       name: 'Adidas tenis MEN-D',
       tag: 'M_END_PLSTWST_T_DJen_GS6272_21_model',
       price: 80,
       incart: 0
   },
   {
       name: 'Nike T-shirt',
       tag: 'nike T-shirt',
       price: 70,
       incart: 0
   },
   {
       name: 'Nike Sportswear',
       tag: 'nike T-shirt 2',
       price: 60,
       incart: 0
   },
   {
       name: 'Adidas Aventure',
       tag: 'Ao_Thun_Logo_adidas_Adventure_trang_H09062_21_model',
       price: 50,
       incart: 0
   },
   {
       name: 'Jordan MA2',
       tag: 'jordan-ma2-shoe-qw1Z6m',
       price: 150,
       incart: 0
   },
   {
       name: 'Nike Air Max Pre-Day',
       tag: 'air-max-pre-day-be-true-shoes-vrnrD7',
       price: 130,
       incart: 0
   },
   {
       name: 'Nike Flow 2020 ISPA',
       tag: 'flow-2020-ispa-shoes-TGfS4n',
       price: 100,
       incart: 0
   },
   {
       name: 'Nike Flow 2020 ISPA SE',
       tag: 'flow-2020-ispa-se-shoes-HdPc5n',
       price: 140,
       incart: 0
   },
   {
       name: 'jordan Jumpman Fleece',
       tag: 'jordan-jumpman-fleece-trousers-hhCW2D',
       price: 70,
       incart: 0
   },
   {
       name: 'Jordan Jumpman Trousers',
       tag: 'jordan-jumpman-trousers-7vVBkS',
       price: 90,
       incart: 0
   },
   {
       name: 'Adidas ZNE Sportswear',
       tag: 'Quan_adidas_Z.N.E._Sportswear_mau_xanh_la_H39845_21_model (1)',
       price: 80,
       incart: 0
   },
   {
       name: 'Zara Pant Grey',
       tag: 'Pant grey',
       price: 40,
       incart: 0
   },
   {
       name: '123',
       tag: 'Screenshot (125)',
       price: 25,
       incart: 0
   },
   {
       name: 'Cassette Print T-Shirt',
       tag: 'Screenshot (125)',
       price: 25,
       incart: 0
   },
   {
       name: 'Mock Neck T-Shirt',
       tag: 'Screenshot (122)',
       price: 20,
       incart: 0
   },
   {
       name: 'Printed Text T-Shirt',
       tag: 'Screenshot (123)',
       price: 30,
       incart: 0
   },
   {
       name: 'Adidas NMD R1',
       tag: 'Giay_NMD_R1_DJen_GZ7922_06_standard',
       price: 123,
       incart: 0
   },
   {
       name: 'Forum Exhibit Low',
       tag: 'Giay_adidas_Ultraboost_DNA_x_LEGO(r)_Colors_DJen_H67953_06_standard',
       price: 110,
       incart: 0
   },
   {
   name: 'Ultraboost B22',
   tag: 'Giay_UltraBoost_22_Mau_xanh_da_troi_GX3061_06_standard (1)',
   price: 235,
   incart: 0
},
   {
      name:"Ultraboost DNA Sea City Pack",
      tag:"GIAY_ULTRABOOST_DNA_SEA_CITY_PACK_SINGAPORE_DJen_GX8807_06_standard",
      price: 210,
      incart:0
   },
  
]

for (let i = 0; i < carts.length; i++) {
   carts[i].addEventListener('click', () => {
       cartNumbers(product[i]);
       totalcost(product[i]);
   })
}

// ------------------ketnoigiohang-------------------------------
function onLoadcartNumbers() {
   let productNumbers = localStorage.getItem('cartNumbers');

   if (productNumbers) {
       document.querySelector('.navbar__service span').textContent = productNumbers;
   }
}

function cartNumbers(product) {
   console.log("the product", product);
   let productNumbers = localStorage.getItem('cartNumbers');
   productNumbers = parseInt(productNumbers);
   if (productNumbers) {
       localStorage.setItem('cartNumbers', productNumbers + 1);
       document.querySelector('.navbar__service span').textContent = productNumbers + 1;
   } else {
       localStorage.setItem('cartNumbers', 1);
       document.querySelector('.navbar__service span').textContent = 1;
   }
   // ---------------------------xuliadd cart-----------------------------
   setItem(product);
}

function setItem(product) {
   let cartItem = localStorage.getItem('productincart');
   cartItem = JSON.parse(cartItem);

   if (cartItem !== null) {

       if (cartItem[product.tag] == undefined) {
           cartItem = {
               ...cartItem,
               [product.tag]: product
           }
       }
       cartItem[product.tag].incart += 1;
   } else {
       product.incart = 1;
       cartItem = {
           [product.tag]: product
       }
   }
   localStorage.setItem("productincart", JSON.stringify(cartItem));
}

function totalcost(product) {
   let cartcost = localStorage.getItem('totalcost');

   console.log("My cartcost", cartcost);
   console.log(typeof cartcost);
   if (cartcost != null) {
       cartcost = parseInt(cartcost);
       if (cartcost < 0) {
           cartcost = 0;
       }
       localStorage.setItem("totalcost", cartcost + product.price);
   } else {
       localStorage.setItem("totalcost", product.price);
   }
}

function displaycart() {
   let cartItem = localStorage.getItem("productincart");
   cartItem = JSON.parse(cartItem);
   console.log(cartItem);
   let smallcontainer = document.querySelector(".small-container");
   let cartcost = localStorage.getItem('totalcost');
   console.log(cartItem);
   if (cartItem && smallcontainer) {
       console.log("rung");
       smallcontainer.innerHTML = '';

       Object.values(cartItem).map(item => {


           smallcontainer.innerHTML +=
               `
         <div id="remove" class="container">
           <table class="table-product">
           <tr>
           <td>
              <div class="cart-info">
                 <img src="./img/${item.tag}.jpg">
                 <div class="cart-info__information">
                    <p>${item.name}</p>
                    <small>Price:$${item.price},00</small>
                    <br>
                    <a onclick="removeproduct('${item.name}')" >remove</a>  
                 </div>
              </div>
           </td>
           <td>
           <span id= "demo">${item.incart}</span>
           </div>
           </td>
           <td>$${item.incart * item.price}.00</td>
        </tr>
        </table>
           </div>
           `;
       });
       smallcontainer.innerHTML += `
       <br>
        <div class="total-price">
        <tr>
        <td>Total Products:</td>
        $${cartcost},00
      </tr></div>
        `;
   }
}
// }
function removeproduct(name) {
   //var remove = document.getElementById("remove");
   //remove.remove();
   let nameItem = name;
   console.log(nameItem);

   let cartItem = localStorage.getItem("productincart");
   let cartcost = localStorage.getItem('totalcost');
   let productNumbers = localStorage.getItem('cartNumbers');
   cartItem = JSON.parse(cartItem);
   for (item in cartItem) {
       console.log(cartItem[item]['name']);
       if (cartItem[item]['name'] === nameItem) {
           console.log("remove true ")
           cartcost = parseInt(cartcost);
           let count = parseInt(cartItem[item]['incart']);
           let price = parseInt(cartItem[item]['price']);
           localStorage.setItem('cartNumbers', productNumbers - count);
           localStorage.setItem("totalcost", cartcost - (count * price));
           delete cartItem[item];
       }
   }
   console.log(cartItem);
   localStorage.setItem("productincart", JSON.stringify(cartItem));
   location.reload();

}

// onLoadcartNumbers()
displaycart()
