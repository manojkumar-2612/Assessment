function clickCounter() {

    document.getElementById("like").style.backgroundColor = "blue";

    var clicks = 0;
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = localStorage.clickcount + " likes";
    }
}



function clickCounter1() {

    document.getElementById("like1").style.backgroundColor = "blue";

    var clicks = 0;
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount1) {
            localStorage.clickcount1 = Number(localStorage.clickcount1)+1;
        } else {
            localStorage.clickcount1 = 1;
        }
        document.getElementById("result1").innerHTML = localStorage.clickcount1 + " likes";
    }
}