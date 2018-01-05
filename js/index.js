/*--------------------header Search登录按钮----------------*/
window.onload=function() {
    var SearchButton = document.querySelector(".Search button");
    SearchButton.onclick = function () {
        window.location.href = 'log%20in.html'
    };
// --------------------banner----------------------------
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
};

