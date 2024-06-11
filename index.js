let saldoVitorias = calcularPartidas(53, 20);

function calcularPartidas(vitorias, derrotas){
    return vitorias - derrotas;
}

function classificadorDeNivel(saldoVitorias) {
    // Se vitórias for menor do que 10 = Ferro
    if(saldoVitorias <= 10) {
        return 'Ferro';
    }

    // Se vitórias for entre 11 e 20 = Bronze
    if(saldoVitorias >= 11 && saldoVitorias <= 20) {
        return 'Bronze';
    }

    // Se vitórias for entre 21 e 50 = Prata
    if(saldoVitorias >= 22 && saldoVitorias <= 50) {
        return 'Prata';
    }

    // Se vitórias for entre 51 e 80 = Ouro
    if(saldoVitorias >= 51 && saldoVitorias <= 80) {
        return 'Ouro';
    }

    // Se vitórias for entre 81 e 90 = Diamante
    if(saldoVitorias >= 81 && saldoVitorias <= 90) {
        return 'Diamante';
    }

    // Se vitórias for entre 91 e 100= Lendário
    if(saldoVitorias >= 91 && saldoVitorias <= 100) {
        return 'Lendário';
    }

    // Se vitórias for maior ou igual a 101 = Imortal
    if(saldoVitorias >= 101) {
        return 'Imortal';
    }
}

console.log(`O Herói tem de saldo de ** ${saldoVitorias} vitorias ** está no nível de ** ${classificadorDeNivel(saldoVitorias)} **`);