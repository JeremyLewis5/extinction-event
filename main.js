const linedOut = document.querySelectorAll('ol');

for (const line of linedOut) {
    line.addEventListener("click", function (event) {
    
    const elementThatWasClicked = event.target;
    elementThatWasClicked.style.textDecoration = 'line-through';
});
}

const fadeAway = document.querySelectorAll('ul');

for (fade of fadeAway) {
    fade.addEventListener('click', function (event) {

        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.opacity = '0';

    });
}

const picFade = document.querySelectorAll('.feature');

for (pic of picFade) {
    pic.addEventListener('click', function (event) {
    
    const elementThatWasClicked = event.target;
    elementThatWasClicked.style.opacity = '0';   
    });
}

//const button = document.querySelector("#destroy-all");



