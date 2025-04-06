document.addEventListener("mousemove", function (event) {
    for (const i = 0; i < 5; i++) {

        // creating confetti div -------
        const confetti = document.createElement("div")
        confetti.classList.add("confetti")
        document.body.appendChild(confetti)

        const randomX = Math.floor(Math.random() * 30)
        const randomY = Math.floor(Math.random() * 30)

        confetti.style.left = event.clientX + randomX + "px"
        confetti.style.top = event.clientY + randomY + "px"

        const randomColor = Math.floor(Math.random() * 256)
        confetti.style.backgroundColor = "rgb(256, 256, " + randomColor + ")"


        setInterval(() => {
            document.body.removeChild(confetti);
        }, 500)
    }
})
