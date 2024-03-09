function truncateText() {
    const textElementsArray = document.querySelectorAll(".news-text")

    textElementsArray.forEach( (elm) => {
        console.log(elm.textContent);
        elm.textContent = elm.textContent.substring(0, 150) + "..."
    })
}

truncateText()