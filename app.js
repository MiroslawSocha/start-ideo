const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const menu = document.querySelector("#menu");
const iconToogleMenu = document.querySelector(".icon-toogle-menu");
let classList = iconToogleMenu.classList;
const controlsSlider = document.querySelectorAll(".control-slider");
const slider = document.querySelector(".slider");
let number = 1;

searchIcon.addEventListener("click", () => {
    if (searchInput.style.display == "block" && searchInput.value == "") {
        searchInput.style.display = "none";
    } else {
        searchInput.style.display = "block"
    }
});

iconToogleMenu.addEventListener("click", () => {
    for (let i = 0; i < classList.length; i++) {
        if (classList[i] == "fa-rotate-180") {
            menu.style.left = "-210px";
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
});



function currentImage() {
    let currentImg = number;
    for (let i = 0; i < controlsSlider.length; i++) {
        controlsSlider[i].addEventListener("click", (event) => {
            event.preventDefault();
            let number = event.target.value;
            slider.src = `assets/slider/slider${number}.png`;
            currentImg = number;
        })

    };

    setInterval(() => {
        currentImg++;
        if (currentImg > 4) {
            currentImg = 1;
        }
        slider.src = `assets/slider/slider${currentImg}.png`;
    }, 3000);


}

currentImage();