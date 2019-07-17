var isPending = false;


$('#menu_top').click(function(){
    
    if(!isPending){
        isPending = true;
            $("#menu_top_wrap").slideToggle(500, function(){
                isPending = false;
        });
    }
   
});
$(window).resize(function() {
    var btn_width = $(this).width();
    if(btn_width >= 570){
        $('.menu_top_wrap').removeAttr('style');
    }
})

