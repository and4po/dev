var numbers = Array.from({length: 1623}, (_, i) => i + 1);
var originalNumbers = [...numbers];
var quotes = "https://raw.githubusercontent.com/dwyl/quotes/main/quotes.json"
var cm_open = '“'
var cm_close = '”'

function genera() {
    if (navigator.language == "ca-ES" || navigator.language == "ca") {
        quotes = "https://raw.githubusercontent.com/and4po/Provant/main/quotes(ca).json"
        cm_open = "« "
        cm_close = " »"
    }
    fetch(quotes)
        .then(response => response.json())
        .then(data => {
            if (numbers.length == 0) {
                numbers = [...originalNumbers];
            }
            var randomIndex = Math.floor(Math.random() * numbers.length);
            var randomNumber = numbers[randomIndex];
            numbers.splice(randomIndex, 1);
            document.getElementById("quote").innerHTML = cm_open + data[randomNumber]["text"] + cm_close;
            document.getElementById("autor").innerHTML = '― ' + data[randomNumber]["author"];
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

if (navigator.language == "ca-ES" || navigator.language == "ca") {
    document.getElementById("titol_pg").innerHTML = "Cites"
    document.getElementById("titol").innerHTML = "Cites"
    document.getElementById("quote").innerHTML = "« Tot el nostre coneixement té el seu origen en les nostres percepcions. »"
    document.getElementById("genera").innerHTML = "Genera nova"
    alert("Atenció! Les cites són traduïdes al català per el Traductor de Google, així que poden ser incorrectes.")
} else {
    document.getElementById("quote").innerHTML = "“All our knowledge has its origins in our perceptions.”"
}
document.getElementById("autor").innerHTML = "― Leonardo da Vinci"
