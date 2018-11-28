// Scrolling Menu Tag

//
// To show an activated tag on a menu while scrolling within the range of the menu.
//

$(window).scroll(function(event) {
    // Define where the view of top is.
    var scrollposition = $(window).scrollTop();

    $('.pure-menu-list a').each(function() {
        var target = $(this).attr('href');
        var targetposition = $(target).offset().top;
        var targetheight = $(target).outerHeight();


        if (targetposition <= scrollposition && (targetposition + targetheight) > scrollposition) {

            $('.pure-menu-list li').removeClass('pure-menu-selected');
            $('.pure-menu-list li').removeClass('menu-item-divided');
            $(this).parent().addClass('pure-menu-selected');
            $(this).parent().addClass('menu-item-divided');
        } else {
            
            $(this).removeClass('pure-menu-selected');
            $(this).removeClass('menu-item-divided');
        }
    });
});