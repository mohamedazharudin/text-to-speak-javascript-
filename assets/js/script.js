/*------------------------------------------------------------------------------------*/
/*--------------   text to voice-----------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------*/

let speech = new SpeechSynthesisUtterance(); // Corrected typo in SpeechSynthesisUtterance

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))); // Corrected typo in Option
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
}); // Corrected missing parenthesis

/*------------------------------------------------------------------------------------*/
/*--------------   end-----------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------*/
