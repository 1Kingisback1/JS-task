const trafficLightEl1 = document.querySelector('#trafficLight1'),
    trafficLightEl2 = document.querySelector('#trafficLight2'),
    trafficLightEl3 = document.querySelector('#trafficLight3'); 

// function makeBlack() {
//     let removeColorDiv = document.querySelector('div');
//     removeColorDiv.style.background = ('black');
// }
function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl1.removeEventListener('click', makeGreen);
    trafficLightEl1.addEventListener('click', function makeBlack() {
        trafficLightEl1.style.background = ('black');
        trafficLightEl1.removeEventListener('click', makeBlack);
        trafficLightEl1.addEventListener('click', makeGreen);
    });
}

trafficLightEl1.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', function makeBlack() {
        trafficLightEl2.style.background = ('black');
        trafficLightEl2.removeEventListener('click', makeBlack);
        trafficLightEl2.addEventListener('click', makeYellow);
    });
}

trafficLightEl2.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightEl3.style.background = ('red');
    trafficLightEl3.removeEventListener('click', makeRed);
    trafficLightEl3.addEventListener('click', function makeBlack() {
        trafficLightEl3.style.background = ('black');
        trafficLightEl3.removeEventListener('click', makeBlack);
        trafficLightEl3.addEventListener('click', makeRed);
    });
}

trafficLightEl3.addEventListener('click', makeRed);