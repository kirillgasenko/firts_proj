var isPending = false;


$('#switch').click(function(){
    if(!isPending){
        isPending = true;
            $(".menu-wrapper").slideToggle(500, function(){
                isPending = false;
        });
    }
   
});
$(window).resize(function() {
    var btn_width = $(this).width();
    if(btn_width >= 570){
        $('menu-wrapper').removeAttr('style');
    }
})

//var sizes = [];
//$('.menu_item').each(function(){
//    var elem = $(this).height();
//    sizes.push(elem);
//});
//var maxHeight = Math.max.apply(null, sizes);
//$('.menu_item').height(maxHeight);


//var elem = $('.menu-wrapper').prev();
//console.log(elem);
// 

  // $('ul.menu').html();
   // $( ".nav-link" ).append( "<p>Test</p>" );
    
