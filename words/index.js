function canvia() {
    const text_area = document.getElementById("input")
    var str = text_area.value
    if (str == "") {
        document.getElementById("number").innerHTML = "Inseriu un text per comptar-ne les paraules."
    } else {
        document.getElementById("number").innerHTML = ""
    }
  }