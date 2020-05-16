const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {
    event.preventDefault();

    // Desconstruindo os elementos para um array.
    const fields = [...document.querySelectorAll(".input-block input")]

    fields.forEach(field => {
        if (field.value === "") form.classList.add("validate-error");
    });

    const formError = document.querySelector(".validate-error");
    if (formError) {
        formError.addEventListener("animationend", (event) => {
            if (event.animationName === "nono") {
                formError.classList.remove("validate-error");
            }
        })
    } else {
        form.classList.add("form-hide");
    }
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

/* background squares */


const ulSquares = document.querySelector("ul.squares")

for(let i = 0; i < 11; i++) {
    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min;

    /* gerando um número aleatório, passando o valor máximo, minimo e adicionando o minimo. */
    const size = Math.floor(random(10, 120));
    const position = random(1, 99);
    const delay = random(5, 0.1)
    const duration = random(24, 12)
    const timing = random(12, 5);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;

    li.style.animationTimingFunction = `cubic-bezier(${Math.random(), Math.random(), Math.random(), Math.random()})`;

    ulSquares.appendChild(li);

}