function sinal(numero) {
    if (numero > 0) {
        return 1;
    } else if (numero < 0) {
        return -1;
    } else {
        return 0;
    }
}

console.log(sinal(-5));
console.log(sinal(0));
console.log(sinal(5));