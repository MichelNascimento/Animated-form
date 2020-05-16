const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {
    event.preventDefault();
    form.classList.add("form-hide");
});

/* animationstar: quando a animação é iniciada. */
form.addEventListener("animationstart", event => {
    if (event.animationName === "down") {
        document.querySelector("body").style.overflow = "hidden";
    }
})

/* animationend: quando ocorre o fim da animação. */
form.addEventListener("animationend", event => {
    /* só vai ocorrer se a animação for a "down" */
    if (event.animationName === "down") {
        form.style.display = "none";
        document.querySelector("body").style.overflow = "none";
    }
})
