function podeSeAposentar(idade, sexo, contribuicao) {
    cond1 = (sexo == 'F') && idade >= 60;
    cond2 = (sexo == 'M') && idade >= 65;
    cond3 = contribuicao >= 30;
    condicao = (cond1 || cond2) && cond3;
    return condicao;
}

console.log(podeSeAposentar(62, "F", 34));