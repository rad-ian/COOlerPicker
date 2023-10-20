function onLoad() {
    let red = document.getElementById("inputRed")
    let green = document.getElementById("inputGreen")
    let blue = document.getElementById("inputBlue")
    red.onchange = onInputChange
    green.onchange = onInputChange
    blue.onchange = onInputChange
}
window.onload = onLoad

function onInputChange() {
    let red = document.getElementById("inputRed").value
    let green = document.getElementById("inputGreen").value
    let blue = document.getElementById("inputBlue").value
    let backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
    document.body.style.backgroundColor = backgroundColor
    let rgbValueElement = document.querySelector(".rgbValue")
    rgbValueElement.innerText = backgroundColor
}           