let vitorias = 679;
let derrotas = 678;


function saldoVitorias (v, d) {
    return v - d;
}

function rankJogador(saldo) {
    if (saldo<=10) {
        return "Ferro"
    } else if (saldo<=20) {
        return "Bronze"
    } else if (saldo<=50) {
        return "Prata"
    } else if (saldo<=80) {
        return "Ouro"
    } else if (saldo<=90) {
        return "Diamante"
    } else if (saldo<=100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}

let score = saldoVitorias(vitorias,derrotas);
console.log (score);
let rank = rankJogador(score);
console.log (rank);

console.log(`O Herói tem de saldo de ${score} vitórias está no nível ${rank}`)



