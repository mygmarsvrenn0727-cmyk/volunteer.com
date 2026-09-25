const textii = document.getElementById("texttt")

const type = document.getElementById("typeee")

const heregtei = document.getElementById("heregteiiiii")

const box = document.getElementById('boxes')

showButton.addEventListener('click', function() {
    const textii = textii.value

    for (let i = 0; i < textii.length; i++) {

const letterDiv = document.createElement('div')
letterDiv.innerHTML = textii[i]
letterDiv.style.border = '1px solid black'
box.appendChild(letterDiv)
    }
})