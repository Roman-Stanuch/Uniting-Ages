// Get the div element with the ID "monkey".
const monkey = document.querySelectorAll(".slide-top")[2];

checkVisibility = () => {
    // Check if the div element is scrolled into view.
    if (monkey.getBoundingClientRect().top < window.innerHeight) {
        monkey.classList.add("active");
        window.removeEventListener('scroll', checkVisibility)
    }
}

window.addEventListener('scroll', checkVisibility);