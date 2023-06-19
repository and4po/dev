document.addEventListener('DOMContentLoaded', function() {
    fetch("https://raw.githubusercontent.com/and4po/dev/main/apps.json")
            .then(response => response.json())
            .then(data => {
                const mida = data.length
                for (let i = mida-1; i >= 0; i -= 1) {
                    myFunction(data[i]["nom"], data[i]["descr"], data[i]["link"], data[i]["img"])
                }
            })
    })

function myFunction(nom, info, link, img) {
    var container = document.querySelector('ol');
            var html = `
            <li class="app">
            <a id="link" href="${link}">
                <img src="${img}">
                <div class="text">
                    <h2>${nom}</h2>
                    <p>${info}</p>
                </div>
            </a>
        </li>
            `
            container.insertAdjacentHTML('beforeend', html);
}