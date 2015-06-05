$(document).ready(function() {
    $('.dropdown-menu').on('mouseover', openSubMenu);
    $('.dropdown-menu').on('mouseout', closeSubMenu);

    function openSubMenu() {
        console.log("Found it!");
        $('.dropdown').addClass('active');	
    };

    function closeSubMenu() {
        $('.dropdown').removeClass('active');	
    };

});

jQuery('a[href^="#"]').click(function(e) {
 
    jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top}, 1000);
 
    return false;
 
    e.preventDefault();
 
});
