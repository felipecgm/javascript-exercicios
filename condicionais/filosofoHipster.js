function filosofoHipster(profissao, nacionalidade, quilometros) {
    cond1 = profissao == "Músico";
    cond2 = nacionalidade == "Brasil";
    cond3 = quilometros > 2;
    condicao = cond1 && cond2 && cond3;

    return condicao;
}

console.log(filosofoHipster('Músico', 'Brasil', 5));
console.log(filosofoHipster('Jogador de futebol', 'Alemanha', 12));
console.log(filosofoHipster('Músico', 'Argentina', 1));
