(function($){
    $.fn.setRedTheBorder = function() {
    	$(this).css("border", "1px solid red");
    };
    
    $.fn.setVisible = function() {
    	$(this).css("visibility", "visible");
    };
    
    $.fn.setBorderToDefault = function() {
    	$(this).css("border", "");
    };
    
    $.fn.setHidden = function() {
    	$(this).css("visibility", "hidden");
    };
    
    $.fn.animateToMarginLeft = function() {
    	$(this).animate({marginLeft: "+=200px"});
    };
    
    $.fn.setMarginLeftToZero = function() {
    	$(this).css("marginLeft", "0px" );
    };
    
})(jQuery);