function displayPoem(response) {
    console.log("poem generated");
    new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
});
}






function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "083468eba6ce58a07346b8t5d1ac0fod";
let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
let context = "You are a short Poem expert. Your passion is to generate a poem in basic HTML. Make sure to follow the user instructions.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);


axios.get(apiUrl).then(displayPoem);
}







let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
