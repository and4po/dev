function canvia() {
    const text_area = document.getElementById("input")
    var str = text_area.value
    if (str == "") {
        document.getElementById("number").innerHTML = ""
    } else {
        document.getElementById("number").innerHTML = "El text és de  " + str.split(' ').length + " paraules."
    }
  }
