// CAROUSSEL

const carousel = document.querySelector(".carousel");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

// Initialisation de l'angle de rotation
let currdeg = 0;

// Gestionnaire d'événement pour le bouton Suivant
nextButton.addEventListener("click", () => {
  currdeg -= 60;
  carousel.style.transform = `rotateY(${currdeg}deg)`;
});

// Gestionnaire d'événement pour le bouton Précédent
prevButton.addEventListener("click", () => {
  currdeg += 60;
  carousel.style.transform = `rotateY(${currdeg}deg)`;
});
setTimeout(() => {
        const main = document.querySelector("main");
        main.style.opacity = "1";
        main.style.transform = "translateY(0px)";
    }, 500);