function rankCalculation(wins, loses) {
    let winRatio = wins - loses;
    let rank

    // Determinação do nível baseado no número de vitórias
    if ( winRatio < 10) {
        rank = "Ferro";
    } else if (winRatio >= 11 && winRatio <= 20) {
        rank = "Bronze";
    } else if (winRatio >= 21 && winRatio <= 50) {
        rank = "Prata";
    } else if (winRatio >= 51 && winRatio <= 80) {
        rank = "Ouro";
    } else if (winRatio >= 81 && winRatio <= 90) {
        rank = "Diamante";
    } else if (winRatio >= 91 && winRatio <= 100) {
        rank = "Lendário";
    } else if (winRatio >= 101) {
        rank = "Imortal";
    }
    return `O Herói tem um saldo de ${winRatio} e está no nível de ${rank}`
    
}

	let wins = 49
	let loses = 10
    
    const result = rankCalculation (wins, loses)

console.log(result)