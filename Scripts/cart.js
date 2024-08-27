function addToCart(){
let addedToCartJsonItems =JSON.parse(localStorage.getItem('productStoredItem')) || [] ;

  addedToCartJsonItems.forEach((addedToCartJsonItem,) => {
   
    let addedItem = ''
    
    addedItem = `<div class="added-item-division " data-id ="1">
   <li class="Added-Items">
     <img  class ="image-item"src="${addedToCartJsonItem.itemImage}">
   </li>
   <button class="button-remove" >remove</button>
  </div> `
   
   document.querySelector('.check-out').innerHTML +=addedItem
   
  
 });
  

 
function updateLocalStorage(){
           addedToCartJsonItems.splice(0,1)
       
       localStorage.setItem('productStoredItem',JSON.stringify(addedToCartJsonItems))
       const updateaddedToCartJsonItems = JSON.parse(localStorage.getItem('productStoredItem'))
       console.log(updateaddedToCartJsonItems)

}

  const itemsDivision = document.querySelectorAll('.added-item-division')

  itemsDivision.forEach((itemdivision)=>{
    const button = itemdivision.querySelector('.button-remove');
      button.addEventListener('click',()=>{
      
      updateLocalStorage()
      itemdivision.remove()

      
    })
   })
  
  }
addToCart()
let totalPrice =0

function renderPurchaseSection(){
   let addedToCartJsonItemsPrices = JSON.parse(localStorage.getItem('productStoredItem'))
   let purchaseHtml =''
   
   addedToCartJsonItemsPrices.forEach((addedCartItemsPrice)=>{
      

      totalPrice+= parseInt(addedCartItemsPrice.itemPrice)
     // console.log(totalPrice)
   })
   purchaseHtml = `<div class="total-amount">
    <div class="handle-all-payment-features-division">
      <h4 class="total-purchase-division">Your total purchase</h4>
      <div class="item-added">Item added : </div>
      <div class="Total-number-of-items">Total number of items : </div>
      <div class="price-division">Price :$ </div>
      <div class="total-price-division">Total Price : ${totalPrice}</div>
      </div>
      <div class="main-payment-division">
      <h4 class="division-payment-method-head">Choose a payment method</h4>

      <div class="payment-option-division">
                <div class="mpesa-division">
          <img  class="payment-image-icon"src="images-for my project/images (4).png" alt="pay with Mpesa">
        </div>
        <div class="paypal-division">
          <img class="payment-image-icon" src="images-for my project/download (33).png" alt="pay with paypal">
        </div>
        <div class="visa-division">
          <img class="payment-image-icon" src="images-for my project/download (34).png" alt="pay with visa">
  
        </div>
            </div>
    </div>
  </div>
`;
   
   document.querySelector('.total-amount-division-and-payment-features').innerHTML =purchaseHtml


  }
renderPurchaseSection()
