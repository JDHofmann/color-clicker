let button = document.querySelector(".btn");
let background = document.querySelector('.container');

button.addEventListener("click", clickFunction);

function clickFunction(){
    var randR = Math.floor(Math.random() * (255 - 192) + 192) + 1;
    var randG = Math.floor(Math.random() * (96 - 0) + 0) + 1;
    var randB = Math.floor(Math.random() * (224 - 128) + 128) + 1;
    console.log(
        "rgb(" +randR+ "," +randG+ "," +randB+ ")"
    )
    background.style.backgroundColor= "rgb(" +randR+ "," +randG+ "," +randB+ ")";
}