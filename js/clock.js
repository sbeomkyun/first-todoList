const clock = document.querySelector("h2#clock")

// function sayHello(){
//     console.log("hello");
// }

// setInterval(sayHello, 5000);
//setInterval(작동시킬 함수, 시간(ms단위)) 1000ms = 1s

// setTimeout(sayHello, 5000);
//setTimeout(작동시킬 함수, 지연시킬 시간(ms단위)) 1000ms = 1s

function getClock(){
    const date = new Date();
    const hours =String(date.getHours()).padStart(2,"0");
    const minutes =String(date.getMinutes()).padStart(2,"0");
    const seconds =String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);




