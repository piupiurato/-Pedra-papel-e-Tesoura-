let pontuacaoJogador = 0;
let pontuacaoComputador = 0;

function jogar(escolhaJogador) {
    let opcoes = ["pedra", "papel", "tesoura"];
    let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    let resultado = determinarVencedor(escolhaJogador, escolhaComputador);
    
    if (resultado === "Ganhaste! 🎉") {
        pontuacaoJogador++;
    } else if (resultado === "Perdeste! 😢") {
        pontuacaoComputador++;
    }

    document.getElementById("resultado").textContent = `Escolheste ${escolhaJogador} | Computador escolheu ${escolhaComputador}. ${resultado}`;
    document.getElementById("pontuacao").textContent = `Jogador: ${pontuacaoJogador} | Computador: ${pontuacaoComputador}`;
}

function determinarVencedor(jogador, computador) {
    if (jogador === computador) {
        return "Empate! 🤝";
    }
    if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        return "Ganhaste! 🎉";
    } else {
        return "Perdeste! 😢";
    }
}
