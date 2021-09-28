//Trapezoid Area Calculator

//Event Listener
document.getElementById("calc-btn").addEventListener("click", calcArea);

//Event function
function calcArea() {
    //Input
    let sidea = +document.getElementById("sidea").value;
    let sideb = +document.getElementById("sideb").value;
    let height = +document.getElementById("height").value;

    //Process
    let area = ((sidea + sideb) / 2) * height;

    //Output
    document.getElementById("area-out").innerHTML = area;
}