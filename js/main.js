const background = document.getElementById('header');

const images = [
    'url("slide-1.png")',
    'url("slide-2.png")',
    'url("slide-3.png")',
    // добавьте сюда свои изображения
];

let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    background.style.backgroundImage = images[currentIndex];
}

// Меняем фон каждые 5 секунд (5000 миллисекунд)
setInterval(changeBackground, 5000);

// Устанавливаем начальный фон
background.style.backgroundImage = images[currentIndex];