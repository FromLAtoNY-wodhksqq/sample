const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.96)";
        setTimeout(() => {
            btn.style.transform = "";
        }, 150);
    });
});
