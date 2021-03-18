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
    elementThatWasClicked.style.width = '0px';   
    });
}

const button = document.querySelector("#destroy-all");

button.addEventListener('click', function () {
    for (const line of linedOut) {
        line.style.textDecoration = 'line-through';
    }

    for (const fade of fadeAway) {
        fade.style.opacity = 0;
    }

    for (const pic of picFade) {
        pic.style.width = '0px';
    }
});


