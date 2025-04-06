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
