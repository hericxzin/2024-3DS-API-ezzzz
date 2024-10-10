const url = "https://raw.githubusercontent.com/hericxzin/github-json/refs/heads/main/json"

async function visualizarInformacoes() {
    const res = await fetch(url);
    const dados = await res.json();

    const notebooksMaisVendidos = dados[0].titulo;
    const numeroDeVendas = dados[0].vendas;

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__class');
    paragrafo.innerText = `Em busca de descobrir quais foram os notebooks mais vendidos: ${notebooksMaisVendidos} com total de vendas de ${numeroDeVendas} nas plataformas: ${plataformas}.`;

    const caixa = document.getElementById('caixa-grafico');
    caixa.appendChild(paragrafo);
}

visualizarInformacoes();
