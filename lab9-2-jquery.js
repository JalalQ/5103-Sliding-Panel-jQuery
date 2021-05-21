//LAB 9 - 2 INVENTORY PAGE
//alert("2 - connected");

jQuery(document).ready(function () { 
    
    //The paragraphs start hidden.
    $('.desc').hide();
    
    //$('.contentBox').hover(function(){$(this).toggleClass('textHovered');});
    $('tr').hover(
		function(){$(this).addClass('textHovered');},
        function(){$(this).removeClass('textHovered');},
	);
    
    
    $('tr').click(function(){
        $('.desc').hide();
        $(this).find('.desc').slideToggle( "fast");

    });

    
});