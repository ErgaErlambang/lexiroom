$(function() {
    const myCarouselElement = document.querySelector('#carouselHeader')

    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
        touch: false
    })
})

$('.js-fullheight').css('height', $(window).height());
$(window).resize(function(){
    $('.js-fullheight').css('height', $(window).height());
});

$('.featured-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:30,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    dots: true,
    autoplayHoverPause: false,
    items: 1,
    navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('.pendidikan-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:30,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    dots: true,
    autoplayHoverPause: false,
    items: 1,
    navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

$('.bimbingan-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:30,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    dots: true,
    autoplayHoverPause: false,
    items: 1,
    navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

// $('.text-img-vector[data-image]').each(function() {
//     $(this).css({
//         'background-image': 'url(' + $(this).attr('data-image') + ')'
//     });
// });