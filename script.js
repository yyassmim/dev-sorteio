function generateNumber() {
    const inputMin = Math.ceil((document.querySelector(".input-min").value))
    const inputMax = Math.floor((document.querySelector(".input-max").value))

    const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin
    
    const resultNumberElement = document.querySelector(".result-number")
    resultNumberElement.innerText = result;

}
