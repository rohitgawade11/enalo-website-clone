
let homeBtn = document.querySelectorAll(".home-btn");
let hoverProducts = document.querySelector(".hover-products");
let listProducts = document.querySelector(".list-products");

for(let btn of homeBtn){
btn.addEventListener("click",()=>{
    let nav = document.querySelector(".nav-bar");
    nav.classList.toggle("navToggel");
    listProducts.classList.remove("product-toogel");
});
}



hoverProducts.addEventListener("click",()=>{
   if(window.innerWidth <= 1000){
   listProducts.classList.toggle("product-toogel");
   } else {
    listProducts.classList.remove("product-toogel");
   }
});

