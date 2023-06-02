const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const menu = document.querySelector("#menu");
const iconToogleMenu = document.querySelector(".icon-toogle-menu");
let classList = iconToogleMenu.classList;
const links = document.querySelectorAll("a");
let menuWidth = 0;
let number = 1;
const kontaktLeft = document.querySelector(".kontakt-arrow-left");
const kontaktRight = document.querySelector(".kontakt-arrow-right");
const kontaktDiv = document.querySelector(".kontakt");
const mobileSlide = document.querySelector(".mobile-slide");
const sponsorLeft = document.querySelector(".sponsor-arrow-left");
const sponsorRight = document.querySelector(".sponsor-arrow-right");

searchIcon.addEventListener("click", () => {
    if (searchInput.style.display == "block" && searchInput.value == "") {
        searchInput.style.display = "none";
    } else {
        searchInput.style.display = "block"
    }
});

iconToogleMenu.addEventListener("click", toogleMenu);

if (menu.style.left == "0px") {
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", toogleMenu);
    }
}

function toogleMenu() {
    menuWidth = document.querySelector(".menu-list").clientWidth;
    for (let i = 0; i < classList.length; i++) {

        if (classList[i] == "fa-rotate-180") {
            menu.style.left = `-${menuWidth}px`;
            iconToogleMenu.classList.add("fa-rotate-0");
            iconToogleMenu.classList.remove("fa-rotate-180");
            iconToogleMenu.style.color = "#023a5c"
        } else if (classList[i] == "fa-rotate-0") {
            menu.style.left = "0";
            iconToogleMenu.classList.add("fa-rotate-180");
            iconToogleMenu.classList.remove("fa-rotate-0");
            iconToogleMenu.style.color = "grey"
        }

    }
}

$('#slider').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    arrows: false
});

$('#akt-slider').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    prevArrow: '<i class="fa fa-chevron-left fa-lg text-muted arrow-left"></i>',
    nextArrow: '<i class="fa fa-chevron-right fa-lg text-muted arrow-right"></i>',
    responsive: [
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 1,
            }
        }
    ]

});

$('#kontakty').slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 771,
            settings: {
                slidesToShow: 1,
                arrows: true,
                prevArrow: '<i class="fa fa-chevron-left fa-lg text-muted arrow-left"></i>',
                nextArrow: '<i class="fa fa-chevron-right fa-lg text-muted arrow-right"></i>'
            }
        }
    ]
});

$('#sponsors-slider').slick({
    infinite: true,
    slidesToShow: 5,
    arrows: true,
    variableWidth: true,
    prevArrow: '<i class="fa fa-chevron-left fa-lg text-muted arrow-left"></i>',
    nextArrow: '<i class="fa fa-chevron-right fa-lg text-muted arrow-right"></i>'
});

toogleMenu();