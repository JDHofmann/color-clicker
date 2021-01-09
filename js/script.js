let button = document.querySelector(".btn");
let background = document.querySelector('.container');


const submitColors = (e) => {
    e.preventDefault();
    let red = document.querySelector("#red").value;
    let green = document.querySelector("#green").value
    let blue = document.querySelector("#blue").value

    clickFunction(red, green, blue)
}

let submit = document.querySelector("form")
submit.addEventListener("submit", submitColors)


function clickFunction(red, green, blue){
    let randR = Math.floor(Math.random() * (red - 27) + 27) + 1;
    let randG = Math.floor(Math.random() * (green - 27) + 27) + 1;
    let randB = Math.floor(Math.random() * (blue - 27) + 27) + 1;
    console.log(
        `rgb(${randR},${randG},${randB})`
    )
    background.style.backgroundColor= "rgb(" +randR+ "," +randG+ "," +randB+ ")";
}