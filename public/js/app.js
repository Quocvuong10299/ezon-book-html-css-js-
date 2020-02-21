function myFunction(x) {
    x.classList.toggle("change");
}

jQuery(document).ready(function($){
    clickbuttonaddclassMenu();
    //add and remove sub menu
    showMenu();
    //footer click reponsive
    reponsivefooterClick();
    //scrolltop
    scrolltopPage();
    //active products btn-products

    slideOne();
    slideTwo();

});
function clickbuttonaddclassMenu() {
    let x = $('.menu-style-2');
    $('#click').click(()=>{
        if($('.menu-style-2 > nav > ul').length){
            x.removeClass('menu-style-2');
        }else{
            x.addClass('menu-style-2');
        }
    });
}
function scrolltopPage(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });
    $('#scrollUp').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 1000);
        return false;
    });
};
function showMenu(){
        const widthSub = $(window).width();
        if (widthSub < 1000){
            $('.menu-content > li > a').after('<i class="fa fa-caret-right" aria-hidden="true"></i>');
            $('.menu-content > li').click(function () {
                if($(this).hasClass('active')){
                    $(this).children('.single-dropdown').slideUp();
                    $(this).children('.shop-menu').slideUp();
                    $(this).removeClass('active');
                }else{
                    $('.shop-menu').slideUp();
                    $('.single-dropdown').slideUp();
                    $(this).children('.single-dropdown').slideDown();
                    $(this).children('.shop-menu').slideDown();
                    $('.menu-content > li').removeClass('active');
                    $(this).addClass('active');
                }
            });
        }
};
function reponsivefooterClick(){
    let width = $(window).width();
    if (width < 1000){
        $('#more').click(function () {
            $('#more2').toggle('slow');
        });
        $('#sp').click(function () {
            $('#sp2').toggle('slow');
        });
    }
};
function slideOne() {
    $('.your-class').slick({
        fade:true,
        cssEase: 'linear',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        mobileFirst:true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: false,
        nextArrow: false,
        focusOnSelect: true
    });
}
function slideTwo() {
    $('.slider-top-month').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        mobileFirst:true,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        focusOnSelect: true,
        prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:'<button class="slick-next slick-arrow" aria-label="Next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false
                }
            }
        ]
    });
}