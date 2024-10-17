function converterMaiusculas(texto) {
    return texto.toUpperCase();
}

function removerEspacosExtras(texto) {
    return texto.trim().replace(/\s+/g, ' ');
}

function contarPalavras(texto) {
    const palavras = texto.split(' ');
    return palavras.length;
}

function processarTexto() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    let textoProcessado = textoEntrada;

    textoProcessado = converterMaiusculas(textoProcessado);
    textoProcessado = removerEspacosExtras(textoProcessado);
    const numeroDePalavras = contarPalavras(textoProcessado);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Texto Processado:</strong> ${textoProcessado}</p>
        <p><strong>Número de Palavras:</strong> ${numeroDePalavras}</p>
    `;
}
