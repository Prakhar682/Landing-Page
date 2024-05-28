document.getElementById('cta-button').addEventListener('click', function() {
    const aboutSection = document.getElementById('about');
    aboutSection.classList.remove('hidden');
    setTimeout(() => {
        aboutSection.style.opacity = 1;
        window.scrollTo({
            top: aboutSection.offsetTop,
            behavior: 'smooth'
        });
    }, 100);
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.classList.remove('hidden');
        setTimeout(() => {
            targetSection.style.opacity = 1;
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }, 100);
    });
});

const carouselImages = document.querySelector('.carousel-images');
const totalImages = carouselImages.children.length;
let currentIndex = 0;

document.getElementById('prev').addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
    updateCarousel();
});

document.getElementById('next').addEventListener('click', function() {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}
