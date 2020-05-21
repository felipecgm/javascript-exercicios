function tamanhoNomeCompleto (nome, sobrenome) {
    var tamanho = nome.length + sobrenome.length + 1;
    return tamanho;
}

console.log(tamanhoNomeCompleto("Enzo", "Silva"));