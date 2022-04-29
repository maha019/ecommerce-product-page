const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const noOfPieces = document.getElementById("no-of-pieces");

const mainImage = document.getElementById("main-image");

const cart = document.getElementById("cart");
const cartBox = document.getElementById("cart-box");
let cartDisplay = false;

const emptyCartMessage = document.getElementById("empty-cart-message");
const cartList = document.getElementById("cart-list");

const productName = document.getElementById("product-name").textContent;
const discountPrice = document
  .getElementById("discount-price")
  .textContent.substring(1);


let no = 0;

plus.addEventListener("click", function () {
  if (no < 20) {
    no++;
    noOfPieces.textContent = no;
  }
});
minus.addEventListener("click", function () {
  if (no >= 1) {
    no--;
    noOfPieces.textContent = no;
  }
});

cart.addEventListener("click", function () {
  if (cartDisplay === false) {
    cartBox.style.display = "block";
    cartDisplay = true;
  } else {
    cartBox.style.display = "none";
    cartDisplay = false;
  }
});

$("#cart-box").click(function(e){
    e.stopPropagation(); 
  });

function addToCart(i) {
  if (no > 0) {
    emptyCartMessage.style.display = "none";
    cartList.innerHTML += `<li id="cart-product-box">
    <div >
        <img id="cart-product-image"  src="images/image-product-1-thumbnail.jpg">
    </div>
    <div >
        <h3>${productName}</h3>
        <p>$${discountPrice} X ${no} <strong style= color:black;>
          $${
        discountPrice * no
      }.00
    </strong></p>
    </div>
    <div id="delete-div">
        <img src="images/icon-delete.svg" alt="hgvut" onclick="return this.parentNode.parentNode.remove()">
    </div>
</li>`;
  }
}

function changeImg(no) {
  mainImage.src = `Images/image-product-${no}.jpg`;
}
if (cartList.innerHTML===""){
  emptyCartMessage.style.display = "block";
}
  






