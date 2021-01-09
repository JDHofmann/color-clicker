let button = document.querySelector(".btn");
let background = document.querySelector('.container');


const submitColors = (e) => {
    e.preventDefault();
    let red = parseInt(document.querySelector("#red").value);
    let green = parseInt(document.querySelector("#green").value);
    let blue = parseInt(document.querySelector("#blue").value);
    let range = parseInt(document.querySelector("#range").value);
    clickFunction(red, green, blue, range)
}

let submit = document.querySelector("form")
submit.addEventListener("submit", submitColors)


const max = (color, range) => {
    return color + range/2
}

const min = (color, range) => {
    return color - range/2
}

const withinRange = (num) => {
    if(num > 255) return 255
    else if ( num < 0 ) return 0
    else return num
}

function clickFunction(red, green, blue, range){

    let randR = Math.floor(Math.random() * (max(red, range) - min(red,range)) + min(red,range));
    let randG = Math.floor(Math.random() * (max(green, range) - min(green, range)) + min(green, range));
    let randB = Math.floor(Math.random() * (max(blue, range) - min(blue, range)) + min(blue, range));

    randR=withinRange(randR)
    randG=withinRange(randG)
    randB=withinRange(randB)

    document.querySelector(".result").innerHTML = `(${randR}, ${randG}, ${randB})`
    background.style.backgroundColor= "rgb(" +randR+ "," +randG+ "," +randB+ ")";
}

// red = 150
// range = 25
// 125 < red > 175
// 
// Math.random() * (max() - min()) + min();
// Math.random()  * ( 175 - 125 ) + 125
// max = red + range/2
// min = red - range/2