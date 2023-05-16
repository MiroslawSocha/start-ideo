const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const menu = document.querySelector("#menu");
const iconToogleMenu = document.querySelector(".icon-toogle-menu");
let classList = iconToogleMenu.classList;
const controlsSlider = document.querySelectorAll(".control-slider");
const sliders = document.querySelectorAll(".slider");
const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");
const slider3 = document.querySelector(".slider3");
const slider4 = document.querySelector(".slider4");
const links = document.querySelectorAll("a");
let menuWidth = 0;
const aktImgs = document.querySelectorAll(".akt-img");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
let images = [1, 2, 3, 4];
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
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", toogleMenu);
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



function currentImage() {
    let currentImg = number;
    for (let i = 0; i < controlsSlider.length; i++) {
        controlsSlider[i].addEventListener("click", (event) => {
            event.preventDefault();
            number = event.target.value;
            console.log(number);


            // console.log(sliders[i])
            let left = sliders[number - 1].style.right;
            console.log(left);
            sliders[number - 1].style.right = `1px`;
            // setInterval()
            // sliders[!number].style.left = `-100%`;

            // sliders[number].style.left = `assets/slider/slider${number}.png`;

            currentImg = number;
        })

    };

    setInterval(() => {
        currentImg++;
        if (currentImg > 4) {
            currentImg = 1;
        }
        slider1.style.right = `calc(${(currentImg - 1) * 100}%`;
        // slider1.src = `assets/slider/slider${currentImg}.png`;
        slider2.style.right = `calc(${(currentImg - 1) * 100 - 100}%`;
        slider3.style.right = `calc(${(currentImg - 1) * 100 - 200}%`;
        slider4.style.right = `calc(${(currentImg - 1) * 100 - 300}%`;
    }, 5000);


}
arrowLeft.addEventListener("click", () => {
    let firstElement = images.shift();
    images.push(firstElement);
    aktSlider()
})

arrowRight.addEventListener("click", () => {
    let lastElement = images.pop();
    images.splice(0, 0, lastElement);
    aktSlider()
})

function aktSlider() {
    for (let img in aktImgs) {
        aktImgs[img].src = `assets/aktualnosci/lorem${images[img]}.png`;

    }
}
toogleMenu();
if (screen.width > '770px' || screen.width <= '500px') {
}


let kontakt = 1;
kontaktLeft.addEventListener("click", () => {
    kontakt--;
    if (kontakt < 1) {
        kontakt = 3;
    }
    changeKontakt();
});
kontaktRight.addEventListener("click", () => {
    kontakt++;
    if (kontakt > 3) {
        kontakt = 1;
    }
    changeKontakt();
});


function changeKontakt() {
    switch (kontakt) {
        case 1:
            kontaktDiv.innerHTML = `
                <p class="kontakt-nazwa">SIMPLE S.A.</p>
                <p class="kontakt-adres">ul. Bronisława Czecha 49/51 <br> 04-555 Warszawa</p>
                <p class="kontakt-telefon">tel.:(22)812-58-98 <br> fax.:(22)815-49-83</p>
                <p class="kontakt-email">simple@simple.com.pl</p>`
            break;
        case 2:
            kontaktDiv.innerHTML = `
                <p class="kontakt-nazwa">SIMPLE S.A. - Ośrodek Badawczo - rozwojowy Lublin</p>
                <p class="kontakt-adres">ul. Wolska 11A/4 <br> 20-411 Lublin</p>
                <p class="kontakt-telefon">tel. kom: +48 696 001 286</p>
                <p class="kontakt-email">lublin@simple.com.pl</p>`
            break;
        case 3:
            kontaktDiv.innerHTML = `
                <p class="kontakt-nazwa">SIMPLE S.A. - oddział Rzeszów</p>
                <p class="kontakt-adres">ul. Rejtana 53A <br> 35-326 Rzeszów</p>
                <p class="kontakt-telefon">tel. kom.: +48 696 001 235 <br> fax.: (17)865 42 41</p>
                <p class="kontakt-email">rzeszow@simple.com.pl</p>`
            break;
        default:
            break;
    }

}

let sponsor = 1;
sponsorLeft.addEventListener("click", () => {
    sponsor--;
    if (sponsor < 1) {
        sponsor = 5;
    }
    mobileSlide.src = `assets/sponsors/sponsor${sponsor}.png`;
})
sponsorRight.addEventListener("click", () => {
    sponsor++;
    if (sponsor > 5) {
        sponsor = 1;
    }
    mobileSlide.src = `assets/sponsors/sponsor${sponsor}.png`;
})



currentImage();