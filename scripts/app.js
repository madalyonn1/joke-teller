const button = document.getElementById("button");
const audioElement = document.getElementById("audio");
const bubbleElement = document.getElementById("bubble");

// Disabled/Enabled Button
function toggleButton() {
  button.disabled = !button.disabled;
  bubbleElement.hidden = !bubbleElement.hidden;
}

// Passing Joke to VoiceRSS API
function tellME(joke) {
  VoiceRSS.speech({
    key: "2197c8bd19424b8b87d0f227d9f265a9",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// Get Jokes from JOKE API
async function getJokes() {
  let joke = "";
  const apiUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    //Bubble
    bubbleElement.textContent = joke.replace("...", "\n");
    // Text-to-Speech
    tellME(joke);
    // Disable Button
    toggleButton();
  } catch (err) {
    // Catch errors here
  }
}

// Event Listeners
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton);
