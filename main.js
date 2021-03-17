const linedOut = document.querySelector('.ordered');
linedOut.addEventListener("click", function (event) {
    const clickedElement = event.target;
    clickedElement.style.strike();
})