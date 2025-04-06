window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.body.style.backgroundPositionY = `${scrolled * 0.7}px`; // скорость прокрутки
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("square-animation");
        }
    })
})
observer.observe(document.querySelector(".front"));
observer.observe(document.querySelector(".about"));
observer.observe(document.querySelector(".progs"));
observer.observe(document.querySelector(".partn"));
