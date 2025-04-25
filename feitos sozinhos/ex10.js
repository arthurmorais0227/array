let jogos = ['Minecraft', 'CS:GO', 'Valorant'];
let quantidade = jogos.length;
let jogoFavorito = 'TF2';

for (let i = 0; i < quantidade; i++) {
    if (jogoFavorito === jogos[i]) {
        console.log(`${jogoFavorito} faz parte do ranking e ocupa a posição ${i + 1}.`);
    }
}
