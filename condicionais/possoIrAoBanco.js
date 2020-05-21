function possoIrAoBanco(diaDaSemana, horaAtual) {
    var cond1 = (diaDaSemana == "Sábado" || diaDaSemana == "Domingo");
    var cond2 = horaAtual > 9 && horaAtual < 15;
    var condicao = (cond1 || cond2) && !(cond1 && cond2);
    return condicao;
}

console.log(possoIrAoBanco("segunda-feira", 10));
console.log(possoIrAoBanco("terça-feira", 18));
console.log(possoIrAoBanco("Sábado", 11));
