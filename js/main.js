// HERO SLIDER
var index = 1;
slider(1);

function slideImage(n) {
    index = index + n;
    slider(index);
}

function currentSlide(n) {
    slider(index = n);
}

function slider(n) {
    var i;
    var x = document.getElementsByClassName('hero-background-image');
    var dots = document.getElementsByClassName('dots');
    for (i = 0; i < x.length; i++) {
        if (n > x.length) {
            index = 1;
        }
        if (n < 1) {
            index = x.length;
        }
        x[i].style.opacity = "0";
    }
    x[index - 1].style.opacity = "1";
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dots-active", "");
    }
    dots[index - 1].className += " dots-active";
}

// FOOD SLIDER
//var foodIndex = 1;
//foodSlider(1);
//
//function foodSlideImage(n) {
//    foodIndex = foodIndex + n;
//    foodSlider(foodIndex);
//}
//
//function foodSlider(n) {
//    var i;
//    var x = document.getElementsByClassName('food-background-image');
//    for (e = 0; e < x.length; e++) {
//        if (n > x.length) {
//            foodIndex = 1;
//        }
//        if (n < 1) {
//            foodIndex = x.length;
//        }
//        x[e].style.opacity = "0";
//    }
//    x[foodIndex - 1].style.opacity = "1";
//}

$(function () {
    $('.dots:nth-of-type(1)').click(function () {
        currentSlide(1);
    });

    $('.dots:nth-of-type(2)').click(function () {
        currentSlide(2);
    });

    $('.dots:nth-of-type(3)').click(function () {
        currentSlide(3);
    });

    $('.dots:nth-of-type(4)').click(function () {
        currentSlide(4);
    });

    $('.dots:nth-of-type(5)').click(function () {
        currentSlide(5);
    });

    $('.dots:nth-of-type(6)').click(function () {
        currentSlide(6);
    });

    $('.dots:nth-of-type(7)').click(function () {
        currentSlide(7);
    });

    setInterval(function () {
        slideImage(1);
    }, 5000);

    // side nav functionality

    $('#icon').click(function () {
        $('#icon').toggleClass('active');
        $('#responsive-nav').slideToggle();
    });

    // caret nav functionality
    $('ul#main-nav li.main-categories').click(function (e) {
        $(this).toggleClass('active').siblings().removeClass('active');
        e.stopPropagation();
    });

    $(document).on('click', function (e) {
        if ($(e.target).is('ul#main-nav li.main-categories') === false) {
            $('ul#main-nav li.main-categories').removeClass('active');
        }
    });
});


