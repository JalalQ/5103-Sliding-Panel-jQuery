//LAB 9 - 1 FAQ PAGE
//alert("1 - connected");

jQuery(document).ready(function () { 
    
    //The paragraphs start hidden.
    $('.contentBox').hide();//ADDS style.display = "none";
    
    //The paragraphs show and hide when their headings are clicked.
    //This process should take 3 seconds.
    $('h2').click(function(){
        $('.contentBox').hide(3000);
        $(this).next('.contentBox').slideToggle(3000);
	}); 
    
    // Mousing over the paragraph will reverse the colours of the text and background. 
    // Mousing out will switch the colours back to their original values.
    $('.contentBox').hover(function(){$(this).toggleClass('textHovered');});
    
    
});
