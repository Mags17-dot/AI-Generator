function generatePoem(event) {
    event.preventDefault();

new Typewriter("#poem", {
    strings: 
        "I was not happy with the rain until my eyes caught five wet leaves"
    ,
    autoStart: true,
    delay: 1,
    cursor: "",
});
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
