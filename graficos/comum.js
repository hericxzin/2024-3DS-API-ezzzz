function pegarCSS(variavel){
    return getComputedStyle(document.body).getPropertyPropertyValue(variavel)
}

export {pegarCSS}