function verificar() {
    // Obtener los valores seleccionados en los selects
    var valorSelect1 = document.querySelector("#select1").value;
    var valorSelect2 = document.querySelector("#select2").value;
    var valorSelect3 = document.querySelector("#select3").value;

    // Comprobar si el password es 911 o 714
    if (valorSelect1 === "9" && valorSelect2 === "1" && valorSelect3 === "1") {
        document.querySelector("#mensaje").textContent = "Password 1 es correcto";
    } else if (valorSelect1 === "7" && valorSelect2 === "1" && valorSelect3 === "4") {
        document.querySelector("#mensaje").textContent = "Password 2 es correcto";
    } else {
        document.querySelector("#mensaje").textContent = "Password incorrecto";
    }
};
