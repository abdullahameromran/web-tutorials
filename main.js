let hourHand = document.querySelector(".hour");
let minuteHand = document.querySelector(".minute");
let secondHand = document.querySelector(".seconds");
let time = document.querySelector(".time");
// time.innerHtml = "fdf";


setInterval(setTime, 1000);

function setTime() {
    let data = new Date();
    secondHand.style = `transform: rotate(${data.getSeconds()*6}deg)`;
    hourHand.style = `transform: rotate(${data.getHours()%12 * 30}deg)`;
    minuteHand.style = `transform: rotate(${data.getMinutes()  + 60 }deg)`;
}

setInterval(timeIn, 1000);

function timeIn() {
    let data = new Date();
    if (data.getHours() >= 0 && data.getHours() <= 12) {
        if (data.getHours() === 0)
            time.innerHTML = ` 12: ${data.getMinutes() } : ${data.getSeconds()} `;
        else {
            time.innerHTML = ` ${data.getHours()}: ${data.getMinutes() } : ${data.getSeconds()} `;
        }
    } else {
        time.innerHTML = `${data.getHours()%12} : ${data.getMinutes() } : ${data.getSeconds()} `;
    }
    // secondHand.style = `transform: rotate(${data.getSeconds()*6}deg)`;
    // hourHand.style = `transform: rotate(${data.getHours()%12 * 30}deg)`;
    // minuteHand.style = `transform: rotate(${data.getMinutes() * 30}deg)`;
}