import { clothes } from "./data.js"

function renderClothItems(){
  let clothItemHtml = ''
  clothes.forEach((cloth )=>{
    clothItemHtml += 
    `<div class="list-clothes-division ">
      <ul class="first-unorderd-cloth-list">
        <li clas="cloth-list">
          <img class="image-items" src="${cloth.image}">
          <p class="price-items" data-price="${cloth.price}">price$${cloth.price}</p>
          <p class="clothes-name">${cloth.name}</p>
          <p class="product-description">${cloth.description}</p>
          
          
        </li>
        
      </ul>
      <button class="button" data-image="${cloth.image}" data-price="${cloth.price}" data-name="${cloth.name}" >Add to cart</button>
    </div>
`
      
  })
  const newClothItems=JSON.parse(localStorage.getItem('productStoredItem'))||[]
  
  
  
  document.querySelector('.main').innerHTML = clothItemHtml
 document.querySelectorAll('.button').forEach((button)=>{
  button.addEventListener('click',()=>{

    if(button.innerHTML === 'Add to cart'){
      button.innerHTML = 'Added to cart'
    }else{
      button.innerHTML = 'Add to cart'
    }
    
      const productImage = button.dataset.image
      const productPrice = button.dataset.price
      const productName = button.dataset.name
        const productItem = {
        itemName : productName,
        itemPrice:productPrice,
        itemImage:productImage
      }
      
      
      
      newClothItems.unshift(productItem)
      console.log(newClothItems)
  
      const ProductJsonItem = JSON.stringify(newClothItems)
     localStorage.setItem('productStoredItem',ProductJsonItem)
         
       })
 })
  

}

renderClothItems()


