function pegarCSS(variavel){
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const configuraEixo = {
    color: pegarCSS('--branco'),
    size: 16,
    family: pegarCSS('--fonte-texto')
}

export {pegarCSS, configuraEixo}