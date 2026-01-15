    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const dotsContainer = document.querySelector(".slider-dots");

    let current = 0;

    /* dots 생성 */
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        if (index === 0) dot.classList.add("active");

        dot.addEventListener("click", () => {
            current = index;
            showSlide(current);
        });

        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".slider-dots span");

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    prevBtn.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });
