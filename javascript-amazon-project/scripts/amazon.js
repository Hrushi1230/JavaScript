let allHtml = "";
products.forEach((product) => {

  allHtml += `<div class="product-container ">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${product.priceCents / 10}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary add-cart">
            Add to Cart
          </button>
        </div>`

})

document.querySelector('.all-product').
  innerHTML = allHtml;

let cartProduct = [];
let Totalcount = 0;

document.querySelectorAll('.add-cart').forEach((cart, indx) => {
  cart.addEventListener('click', () => {
    Totalcount += 1;

    const selectProduct = products[indx];
    const excitingProd = cartProduct.find(p => p.name === selectProduct.name);

    if (excitingProd) {
      excitingProd.count += 1;

    }
    else {
      cartProduct.push({
        name: selectProduct.name,
        count: 1
      });
    }

    document.querySelector('.cart-count').innerHTML = Totalcount;
    console.log(cartProduct);

  });


});



