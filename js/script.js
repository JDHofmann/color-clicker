let button = document.querySelector(".btn");
let background = document.querySelector('.container');

button.addEventListener("click", clickFunction);

function clickFunction(){
    let randR = Math.floor(Math.random() * (255 - 0) + 0) + 1;
    let randG = Math.floor(Math.random() * (255 - 0) + 0) + 1;
    let randB = Math.floor(Math.random() * (255 - 0) + 0) + 1;
    console.log(
        `rgb(${randR},${randG},${randB})`
    )
    background.style.backgroundColor= "rgb(" +randR+ "," +randG+ "," +randB+ ")";
}