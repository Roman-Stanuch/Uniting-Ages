let animationElements = document.querySelectorAll(".animation");

checkVisibility = () => {
    for (let i = 0; i < animationElements.length; i++) {
        const element = animationElements[i];
        if (element.classList.contains("active")) {
            continue;
        }
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add("active");
        }
    }
}

window.addEventListener('scroll', checkVisibility);