function calcular(){
	var sueldoB = parseFloat(document.getElementById('sueldoBasico').value);
	var diasL = parseFloat(document.getElementById('diasLaborados').value);
	var resultado = (sueldoB/30) * diasL;

	document.getElementById('sueldoTotal').value = resultado;
}