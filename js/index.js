document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const dotsContainer = document.querySelector(".slider-dots");

    let currentIndex = 0;
    let autoSlideInterval;

    /* ===== dots 생성 ===== */
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        if (index === 0) dot.classList.add("active");

        dot.addEventListener("click", () => {
            goToSlide(index);
            resetAutoSlide();
        });

        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".slider-dots span");

    /* ===== 슬라이드 이동 함수 ===== */
    function goToSlide(index) {
        slides[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");

        currentIndex = index;

        slides[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex =
            (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(prevIndex);
    }

    /* ===== 버튼 이벤트 ===== */
    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    /* ===== 자동 슬라이드 ===== */
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();
});
