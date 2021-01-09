let button = document.querySelector(".btn");
let background = document.querySelector('.container');


const submitColors = (e) => {
    e.preventDefault();
    let red = document.querySelector("#red").value;
    let green = document.querySelector("#green").value
    let blue = document.querySelector("#blue").value
    let range = document.querySelector("#range").value
    console.log(range)
    clickFunction(red, green, blue, range)
}

let submit = document.querySelector("form")
submit.addEventListener("submit", submitColors)


function clickFunction(red, green, blue, range){
    let randR = Math.floor(Math.random() * (((red + range/2)) - (red - range/2)) + red - range/2) + 1;
    let randG = Math.floor(Math.random() * (green - 27) + 27) + 1;
    let randB = Math.floor(Math.random() * (blue - 27) + 27) + 1;
    console.log(
        `rgb(${randR},${randG},${randB})`
    )
    background.style.backgroundColor= "rgb(" +randR+ "," +randG+ "," +randB+ ")";
}

// red = 150
// range = 25
// 125 < red > 175
// 
// Math.random() * (max - min) + min;
// Math.random()  * ( 175 - 125 ) + 125
// max = red + range/2
// min = red - range/2