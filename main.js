const linedOut = document.querySelector('.ordered');
linedOut.addEventListener("click", function (event) {
    
    const elementThatWasClicked = event.target;
    elementThatWasClicked.style.backgroundColor = 'green';;
});