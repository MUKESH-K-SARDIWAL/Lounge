

$('#owl-carousel1').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
            nav: false,

        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            // loop: true
        }
    }
})


$('#owl-carousel2').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
            nav: false,

        },
        400:{
            item:3
        },
        556: {
            items: 4,
            nav: false
        },
        776:{
            item:5
        },
        992: {
            items: 7,
            nav: false,
            // loop: true
        }
    }
})

$('#owl-carousel3').owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: false,
    
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false,

        },
        600: {
            items: 2,
            nav: false
        },
        992: {
            items: 3,
            nav: false,
            // loop: true
        }
    }
})

$('#BANNER1').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        }
    }
})



