const select = document.getElementById('breeds');
const card = document.querySelector('.cards');
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

function fetchData(url) {
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .catch(e => console.log("There was a problem", e))
}

Promise.all([
        fetchData("https://dog.ceo/api/breeds/list"),
        fetchData("https://dog.ceo/api/breeds/image/random")
    ])
    .then(data => {
        const breedList = data[0].message;
        const randomImage = data[1].message;

        generateOption(breedList);
        generateImage(randomImage);
    })


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function checkStatus(res) {
    if (res.ok) {
        return Promise.resolve(res);
    } else {
        return Promise.reject(new Error(response.statusText));
    }

}

function generateImage(data) {

    const html = `<img src="${data}" alt>
                   <p> Click to view images of ${select.value}s</p> `;
    card.innerHTML = html
}

function generateOption(data) {

    const options = data.map(item => `<option value="${item}">${item}</option>`).join("");
    select.innerHTML = options
}

function fetchBreedImage() {
    const breed = select.value;
    const img = card.querySelector("img");
    const p = card.querySelector("p");

    fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(data => {
            img.src = data.message;
            img.alt = breed;
            p.textContent = `Click to view more ${breed}s`;
        })
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

select.addEventListener("change", fetchBreedImage);
card.addEventListener("click", fetchBreedImage);



// ------------------------------------------
//  POST DATA
// ------------------------------------------

function postData(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    const config = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ name, comment })
    }

    fetch("https://jsonplaceholder.typicode.com/comments", config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))

}