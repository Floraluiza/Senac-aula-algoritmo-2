var numeroA = parseInt(prompt('Digite o primeiro número: '))
var numeroB = parseInt(prompt('Digite o segundo número: '))

var numeroC = numeroA + numeroB

var numeroD = numeroA - numeroB

var numeroE = numeroA * numeroB

var numeroF = numeroA / numeroB

var numeroG = (2*(numeroA + numeroB))

alert('A soma é: ' + numeroC)
alert('A subtração é: ' + numeroD)
alert('A multiplicação é: ' + numeroE)
alert('A divisão é: ' + numeroF)
alert('A equação é: ' + numeroG)


var valor = parseInt(prompt('Digite o preço do combustível: '))

if (valor > 0.70) {
	console.log(alcool + ' Alcool é melhor!');
		} else if (valor < 0.70) {
			console.log(gasolina + ' Gasolina é melhor!');
		}	else {
      console.log(valor = 0.70 + 'Pode abastecer com um qualquer um')