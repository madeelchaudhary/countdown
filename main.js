// window.onload = countdown();

let countDate = new Date(2021, 2, 31, 0, 0, 0);
function countdown() {
    let now = new Date();
    let countTime = countDate.getTime();
    let nowTime = now.getTime();
    let gap = countTime - nowTime;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.querySelector('.day').innerHTML = d
    document.querySelector('.hour').innerText = h
    document.querySelector('.min').innerText = m
    document.querySelector('.sec').innerText = s

    setTimeout(() => {
        countdown();
    }, 1000);
}

countdown()