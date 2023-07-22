

$('.owl-one').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: `fadeOut`,
    animateIn: `fadeIn`,

});

$('.owl-two').owlCarousel({
    loop: true,
    items: 1,
    // nav: true,
    smartSpeed: 700,
    center: true,
    stagePadding: 300,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
            stagePadding: 0,
        },
        1000: {
            items: 1,
        }
    }
})
$('.owl-three').owlCarousel({
    loop: true,
    nav: true,
    items: 3,
    center: true,
    autoplay: true,
    margin: 10,
    stagePadding: 0,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
})
$('.owl-four').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
})



// read-more read-less funtionality
$(document).ready(function () {
    $(".more").css("display", "none");
    $(".less-Btn").css("display", "none");

    $(".read-Btn").click(function () {
        $(this).siblings(".dots").css("display", "none");
        $(this).siblings(".more").css("display", "inline");
        $(this).css("display", "none");
        $(this).siblings(".less-Btn").css("display", "inline");
    });
    $(".less-Btn").click(function () {
        $(this).siblings(".dots").css("display", "inline");
        $(this).siblings(".more").css("display", "none");
        $(this).css("display", "none");
        $(this).siblings(".read-Btn").css("display", "inline");
    });
    // caraousel zoom
    // function zoom() {
    //     $(".owl-item.active.center").find('.maruti-car-img').addClass("maruti-car-img-hover");
    // } zoom()
    // setInterval(zoom, 300);
    // clearTimeout(zoom, 100);
    // function zoomA() {
    //     $(".owl-item.active.center").find('.maruti-car-img').removeClass("maruti-car-img-hover");
    // } zoomA()
    // setInterval(zoomA, 2000);


    // form-select validation
    $(".form-select").prop("selectedIndex", -1);
    // year get

    var a = new Date().getFullYear();
    $("#year").html(a);
})