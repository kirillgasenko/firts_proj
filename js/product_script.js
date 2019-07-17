function getProduct(data) {

    var params = location.search.slice(1).split('&');
    var current_product = {};

    params.forEach(function(param){
        var param_data = param.split('=');
        if (param_data[0].toLowerCase() === 'id') {
            data.forEach(function(product){
                if (param_data[1] === product.id) {
                    current_product = product;
//                    console.log(current_product);
                }
            })
        }
    });

    if (!current_product.name) {
        location.replace('/');
    } 
//    else {
//        document.getElementById('page-preloader').classList.add('hidden');
//    }

    if(current_product.amount > 0){
        document.getElementById('stock').innerHTML = 'In stock';
    }
    else{
        document.getElementById('stock').innerHTML = 'Out of stock';
    }
    
    document.getElementById('add_to_cart').setAttribute('data-product-value', current_product.id);
    document.getElementById('bread_current').innerHTML = current_product.name;
    document.getElementById('product_title').innerHTML = current_product.name;
    document.getElementById('product_subtitle').innerHTML = current_product.subtitle;
    document.getElementById('product_price').innerHTML = current_product.currency + current_product.price;
    if (current_product.old_price){
        document.getElementById('product_old_price').innerHTML = current_product.currency + current_product.old_price;
    }
    document.getElementById('product_sku').innerHTML = 'SKU' + current_product.sku;
    document.querySelector('[data-content="description"]').innerHTML = "<p>".concat(current_product.desc, "</p>");

  //  data-product-value="12345"
//
//    if (current_product.videos) {
//        var videos = '';
//        current_product.videos.forEach(function(video){
//            var videos_template = "<div class=\"video_box\" style=\"width: 588px;\">".concat(video, "</div>");
//            videos += videos_template;
//        });
//        document.querySelector('[data-content="videos"]').innerHTML = videos;
//    }

    if (current_product.details) {
        var details = '',
            details_values = '';
        current_product.details.forEach(function(detail){
            details += "<span>".concat(detail.name, "</span>");
            details_values += "<span>".concat(detail.value, "</span>");
            
        });
        document.getElementById('product_details').innerHTML = details;
        document.getElementById('product_details_values').innerHTML = details_values;
    }

    if (current_product.images.length > 0) {
        var images = '';
        current_product.images.forEach(function(image){
            var image_thumb = "<img data-caption=\"".concat(image.caption, "\" src=\"/img/top_prod/").concat(image.src, "\" alt=\"").concat(image.alt, "\">");
            images += image_thumb;
        });
        document.querySelector('[data-slider="big"]').innerHTML = images;
    }

}