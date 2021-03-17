const linedOut = document.querySelector('.ordered');

for (const line of linedOut) {
linedOut.addEventListener("click", function (event) {
    
    const elementThatWasClicked = event.target;
    elementThatWasClicked.style.textDecoration = 'line-through';
});
}