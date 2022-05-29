// About Me animation
var i = 0;
var speed = 50;
const text = 'About Me'

function animation() {
    const element = document.getElementById('aboutme')
    const splitStr = text.split('')
    if (i < text.length) {
        if (i == 6) {
            const ct = element.innerText
            const nt = ct + " " + splitStr[i]
            element.innerText = nt
            i++
            setTimeout(animation, speed);
        } else {
            const ct = element.innerText
            const nt = ct + splitStr[i]
            element.innerText = nt
            i++;
            setTimeout(animation, speed);
        }
    }
}

setTimeout(animation, 1000)