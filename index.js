let resultadoVitorias = saldo (150, 35)

function saldo(numV, numD){
	let somatorio = numV - numD
	return somatorio
 }
 rankearJogos(resultadoVitorias)
 function rankearJogos() {
    let resultadoVitorias = saldo (150, 35)
    let nivel = ""
  if (resultadoVitorias <= 10) {
    nivel = "Ferro"
} else if (resultadoVitorias <= 20) {
    nivel = "Bronze"
} else if (resultadoVitorias <= 50) {
    nivel = "Prata"
} else if (resultadoVitorias <= 80) {
    nivel = "Ouro"
} else if (resultadoVitorias <= 90) {
    nivel = "Diamante"
} else if (resultadoVitorias <= 100) {
    nivel = "Lendário"
} else if (resultadoVitorias >= 100) {
    nivel = "Imortal"
}
    console.log("O Herói tem saldo de "  + resultadoVitorias + " vitorias e está no nível "  + nivel);
}