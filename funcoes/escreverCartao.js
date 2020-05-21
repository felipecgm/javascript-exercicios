function escreverCartao(titulo, nome, sobrenome) {
    return (titulo + " " + nome + " " + sobrenome);
}

resultado = escreverCartao("Dra.", "Ana", "Pérez");
console.log(resultado == "Dra. Ana Pérez");