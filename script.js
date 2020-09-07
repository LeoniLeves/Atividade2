function calcularIMC() {
	var num1 = document.getElementById("valor1").value;
	var num2 = document.getElementById("valor2").value;
	if (num1 == "" || num2 == "") {
		alert("Informe os dois valores.");
	} else {
	var um = parseFloat(num1);
	var dois = parseFloat(num2);
	var res = (um*um)/ dois;
		document.getElementById("resultado").value = res;
		//alert("O resultado é " + res);
	}
}