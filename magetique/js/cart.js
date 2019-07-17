"use strict";
function checkCartInformer () {
    checkCartProducts();
    var cart_products_count = JSON.parse(localStorage.getItem('cart')).length;
    document.getElementById('cart_informer').innerHTML = (cart_products_count == 1) ? cart_products_count + ' item' : cart_products_count + ' items';
}

/* Добавление товара в корзину */
function addToCart (id, products, amount) {
    checkCartProducts();
    var cart_products = JSON.parse(localStorage.getItem('cart'));
    var newCartProduct = {};
    products.forEach(function(item){
        if (item.id === id) {
            newCartProduct = new CartProduct(
                id,
                item.images[0],
                item.name,
                item.price,
                item.currency,
                item.details,
                amount || 1,
            );
            cart_products.push(newCartProduct);
        }
    });
    localStorage.setItem('cart', JSON.stringify(cart_products));
    checkCartInformer();
}

/* Вывод товаров корзины */
function renderCartProducts() {
    checkCartProducts();
    
    var cart_products = JSON.parse(localStorage.getItem('cart'));
    if (cart_products.length > 0) {
        getCartProducts(cart_products);
    } else {
        document.getElementById('empty_cart').innerHTML = '<span class="empty_cart">Cart is empty.</span>';
    }
    var cart_delete_buttons = document.querySelectorAll('[data-product-id-delete]');
        cart_delete_buttons.forEach(function(item){
            item.addEventListener('click', function(e){
                var delete_product_id = this.getAttribute('data-product-id-delete');
                deleteCartProduct(delete_product_id);
            });
        });
    checkCartInformer();
    calculateCartAmount()
}

/* Проверка товаров корзины */
function checkCartProducts () {
    var cart_products = localStorage.getItem('cart');
    if (!cart_products) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

/* Получение товаров корзины */
function getCartProducts(data) {
    var cart = '';
    data.map(function(item){

        var cart_product = "<li class=\"cart_products_li\">\n   <div class=\"product_cart\">\n       <div class=\"img_cart\">\n         <div class=\"icon_cart\">\n              <div class=\"buttons_img_cart\">\n                  <button class=\"pencil_cart\" data-product-id-delete=\"".concat(item.id, "\"><ion-icon name=\"trash\"></ion-icon></button>\n              </div>\n               <a href=\"/product.html?id=").concat(item.id, "\"><img src=\"/img/top_prod/").concat(item.image.src, "\" alt=\"").concat(item.image.alt, "\"></a>\n           </div>\n           <a href=\"/product.html?id=").concat(item.id, "\">").concat(item.name, "</a>\n       </div>\n       <div class=\"price_wrap_cart\">\n          <span class=\"display_none_cart\">Price</span>\n           <span>").concat(item.currency).concat(item.price, "</span>\n       </div>\n       <div class=\"col_prod_cart\">\n           <form action=\"\">\n               <span class=\"display_none_cart\">Qty</span>\n               <input type=\"number\" class=\"input_cart\" placeholder=\"1\" value=\"").concat(item.amount, "\"/>\n           </form>\n       </div>\n       <div class=\"totalprice_cart\">\n           <span class=\"display_none_cart\">Subtotal</span>\n           <span>").concat(item.currency).concat(item.price * item.amount, "</span>\n       </div>\n   </div>\n </li>");
        
        cart += cart_product;
    });
    document.getElementById('cart').innerHTML = cart;
};

function calculateCartAmount() {
    var cart_products = JSON.parse(localStorage.getItem('cart'));

    var total_price = 0;
    var products_count = 0;
    var current_currency = '$';
    var current_tax = 5;
    cart_products.map(function(item){
        products_count++;
        total_price += item.price * item.amount;
        current_currency = item.currency;
    });
//    document.querySelector('[data-cart-field="total_count"]').innerHTML = products_count;
    document.querySelector('[data-cart-field="total_price"]').innerHTML = current_currency + ' ' + total_price;
    document.querySelector('[data-cart-field="tax_excl_price"]').innerHTML =  current_currency + ' ' + (total_price + current_tax);
    document.querySelector('[data-cart-field="tax_amount"]').innerHTML = current_currency + current_tax;
}

function deleteCartProduct(id){
    var cart_products = JSON.parse(localStorage.getItem('cart'));
    var arrPos = cart_products.findIndex(item => item.id === id);
    cart_products.splice(arrPos, 1);
    localStorage.setItem('cart', JSON.stringify(cart_products));
    checkCartInformer();
    renderCartProducts();
};





//function addToCartButtonsListener(callback){
//    var cart_buttons = document.querySelectorAll('button[data-product-value]');
//    cart_buttons.forEach(function(item){
//        item.addEventListener('click', function(e){
//            var product_value = this.getAttribute('data-product-value');
//            addToCart(product_value, JSON.parse(localStorage.getItem('products')));
//            callback("<ion-icon name=\"checkmark\"></ion-icon><span>Item added to cart!</span>", 'success');
//        });
//    });
//    checkCartInformer();
//}



