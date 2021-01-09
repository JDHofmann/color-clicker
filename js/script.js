let button = document.querySelector(".btn");
let background = document.querySelector('.container');


const submitColors = (e) => {
    e.preventDefault();
    let red = document.querySelector("#red").value
    console.log(red)
    clickFunction(red)
}



let submit = document.querySelector("form")
submit.addEventListener("submit", submitColors)
// button.addEventListener("click", clickFunction);


function clickFunction(red){
    let randR = Math.floor(Math.random() * (red - 27) + 27) + 1;
    let randG = Math.floor(Math.random() * (255 - 0) + 0) + 1;
    let randB = Math.floor(Math.random() * (255 - 0) + 0) + 1;
    console.log(
        `rgb(${randR},${randG},${randB})`
    )
    background.style.backgroundColor= "rgb(" +randR+ "," +randG+ "," +randB+ ")";
}