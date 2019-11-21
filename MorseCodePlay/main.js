const encoder = {
    "0": "-----",
    " ": "/",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "!": "-·-·--",
    ",": "--··--",
    ".": "·-·-·-",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--.."
};

const decoder = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " ",
    "-·-·--": "!",
    "·-·-·-": ".",
    "--··--": ","
};

///////////////// Decode Morse Code

decodeMorse = function(morseCode) {
    const code = morseCode.split("   ");
    let wordFinal = [];
    //console.log(code);

    code.map((word) => {

        word.split(" ").map((letter) => {
            let final = decoder[letter];
            console.log(final);
            wordFinal.push(final);
        });


        wordFinal.push(" ");

    });

    return wordFinal.join("").trim().charAt(0).toUpperCase() + wordFinal.join("").trim().slice(1);

}

document.getElementById("formDecode").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputValueDecode = document.getElementById("value").value;


    document.getElementById("result").innerHTML = decodeMorse(inputValueDecode);

});

////////// Encode Morse Code

encodeMorse = function(encodeMorse) {
    const message = encodeMorse.toLowerCase();
    console.log(message);
    let arrayFromString = Array.from(message);
    console.log(arrayFromString);
    let wordFinal = [];

    arrayFromString.map((word) => {
        let final = encoder[word];
        wordFinal.push(final);
    });
    console.log(wordFinal);



    //console.log(wordFinal);
    return wordFinal.join(" ");

}


document.getElementById("formEncode").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputValues = document.getElementById("valueToEncode").value;


    document.getElementById("resultEncoder").innerHTML = encodeMorse(inputValues);

});