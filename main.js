function init() {
    const idAdvice = document.getElementById("advice-id");
    const textAdvice = document.getElementById("advice-text");
    const btn = document.getElementById("btn");
    const fetchData = () => {
        fetch("https://api.adviceslip.com/advice")
            .then(response => response.json())
            .then(data => ShowAdviceData(data))
            .catch(error => showError())
    }
    const ShowAdviceData = data => {
        idAdvice.innerHTML = data.slip.id;
        textAdvice.innerHTML = `"${data.slip.advice}"`;
    }
    const showError = () => {
        idAdvice.innerHTML = ""
        textAdvice.innerHTML = "Advice not available"
    }
    btn.addEventListener('click', () => fetchData())
}
document.addEventListener("DOMContentLoaded", () => init())

