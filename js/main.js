AOS.init({
    offset: 100,
    duration: 1000
});
$(document).ready(function() {
    $('.all1').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 1,
        autoplayHoverPause: false,
        autoplay: true, //5000
        autoplayTimeout: 8000,
        // touchDrag: false,
        // mouseDrag: false,
        // animateIn: 'slideInLeft', // add this
        // animateOut: 'slideInRight' // and this
    });

});
$(".section3__right").click(function() {
    var owl = $(".all1");
    owl.trigger('next.owl.carousel');
});
$(".section3__left").click(function() {
    var owl = $(".all1");
    owl.trigger('prev.owl.carousel');
});




var acc = document.getElementsByClassName("accordian__heading");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


$(".headerover li").mouseover(function() {
    var className = $(this).attr('data-class');
    $(".header__Innnermenu ul").css("display", "none");
    $("#"+className).css("display", "block");
 });

   $(document).ready(function(){
  $('.headerover li').mouseover(function(){
    $('li').removeClass("active");
    $(this).addClass("active");
});
});


$(document).ready(function() {
    $('.tab_t li').click(function() {
        $('.tab_t li').removeClass("active");
        $(this).addClass("active");
    });
});
$(".tab_t li").click(function() {
    var className = $(this).attr('data-class');
    $(".tab_change").css("display", "none");
    $(".tab_change").css("opacity", "0");
    $("#" + className).css("display", "block");
    $("#" + className).css("opacity", "1");
});



   


jQuery(document).ready(function($) {
    $("#menu").mmenu({
        "extensions": ["effect-menu-zoom", "effect-panels-zoom", "pagedim-black", "theme-dark"],
        "offCanvas": {
            "position": "right"
        },
        "counters": true,
        "iconPanels": true,
        "navbars": [{
            "position": "top"
        }]
    });
});
// menu close