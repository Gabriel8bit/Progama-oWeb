function calcularSoma() {
    var parcela1 = parseInt(document.getElementById("parcela1").value);
    var parcela2 = parseInt(document.getElementById("parcela2").value);
    var resultado = parcela1 + parcela2;
    document.getElementById("resultado").innerHTML = "A Soma entre " + parcela1 + " e " + parcela2 + " é igual a " + resultado;
}