//;  

document.getElementById('valyrianButton').addEventListener('click', tranlateValyrian);

function tranlateValyrian(e) {
    e.preventDefault()

    var valerian = document.getElementById("userInput").value;
    console.log(valerian);
    var url = 'https://api.funtranslations.com/translate/valyrian.json?text=' + valerian;


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);

            document.getElementById("demo").innerHTML = myArr.contents.translated;
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


document.getElementById('klingonButton').addEventListener('click', tranlateKlingon);

function tranlateKlingon(e) {
    e.preventDefault()

    var klingon = document.getElementById("userInputSecond").value;

    var urlKlingon = 'https://api.funtranslations.com/translate/klingon.json?text=' + klingon;


    var xmlhttpKlingon = new XMLHttpRequest();

    xmlhttpKlingon.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var resultsKlingon = JSON.parse(this.responseText);

            document.getElementById("demoSecond").innerHTML = resultsKlingon.contents.translated;
        }
    };

    xmlhttpKlingon.open("GET", urlKlingon, true);
    xmlhttpKlingon.send();
}