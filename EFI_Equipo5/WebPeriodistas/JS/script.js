    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let current = 0;
    let interval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    }

    // Botones manuales
    next.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prev.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Autoavance cada 5 segundos
    function startAutoSlide() {
        interval = setInterval(nextSlide, 2500);
    }

    function resetInterval() {
        clearInterval(interval);
        startAutoSlide();
    }

    // Inicializar
    showSlide(current);
    startAutoSlide();