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

const aktImgs = document.querySelectorAll(".akt-img");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
let images = [1, 2, 3, 4];

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
            number = event.target.value;
            console.log(number);


            // console.log(sliders[i])
            let left = sliders[number-1].style.right;
            console.log(left);
            sliders[number-1].style.right = `1px`;
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

arrowRight.addEventListener("click", ()=> {
    let lastElement = images.pop();
    images.splice(0, 0, lastElement);
    aktSlider()
})

function aktSlider() {
    for (let img in aktImgs) {
        aktImgs[img].src = `assets/aktualnosci/lorem${images[img]}.png`
        
    }
}

currentImage();