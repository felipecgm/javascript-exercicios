function podeSubir(alturaPessoa, vemComCompania, temProblemaCardiaco) {
    cond1 = alturaPessoa >= 1.5 || (vemComCompania == true && alturaPessoa >= 1.2);
    cond2 = !temProblemaCardiaco;
    condicao = cond1 && cond2;
    return condicao;
}

console.log(podeSubir(1.2, true, false));