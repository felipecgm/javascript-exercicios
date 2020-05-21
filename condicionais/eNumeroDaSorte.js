function eNumeroDaSorte(numero) {
    var condicao1 = numero > 0;
    var condicao2 = ((numero % 2 == 0) || (numero % 3 == 0));
    var condicao3 = numero != 15;
    var condicao =  condicao1 && condicao2 && condicao3;
    return condicao;
}

console.log(eNumeroDaSorte(10));