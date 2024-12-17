const images = ['pic1.png', 'pic2.png', 'pic3.png', 'pic4.png'];

const carouselContainer = document.getElementById('carousel-container');

const slidesDiv = document.createElement('div');
slidesDiv.className = 'slides';

const indicatorsDiv = document.createElement('div');
indicatorsDiv.className = 'indicators';

carouselContainer.appendChild(slidesDiv);
carouselContainer.appendChild(indicatorsDiv);

images.forEach((image, index) => {

    const img = document.createElement('img');
    img.src = image;
    img.alt = `Image ${index + 1}`;
    img.className = index === 0 ? 'active' : '';
    slidesDiv.appendChild(img);

    const indicator = document.createElement('span');
    indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
    indicator.setAttribute('data-index', index);
    indicatorsDiv.appendChild(indicator);
});

let currentIndex = 0;

function updateCarousel() {
    const allImages = document.querySelectorAll('.slides img');
    const allIndicators = document.querySelectorAll('.indicators .indicator');

    allImages.forEach((img, idx) => {
        img.classList.toggle('active', idx === currentIndex);
    });

    allIndicators.forEach((indicator, idx) => {
        indicator.classList.toggle('active', idx === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length; 
    updateCarousel();
}


setInterval(nextSlide, 3000);


document.querySelectorAll('.indicator').forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'), 10);
        updateCarousel();
    });
});