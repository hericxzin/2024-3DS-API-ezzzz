import { pegarCSS } from "./comum.js";

async function graficosNotebooks() {
    const url = 'https://raw.githubusercontent.com/hericxzin/github-json/refs/heads/main/tancredo.json'; // Substitua pela URL correta do seu JSON
    const res = await fetch(url);
    const dados = await res.json();

    // Extrair as turmas e notebooks
    const turmas = dados.slice(1).map(jogo => jogo[1]); // Turmas
    const notebooks = dados.slice(1).map(jogo => jogo[2]); // Notebooks

    // Contar votos para turmas
    const contagemTurmas = turmas.reduce((acc, turma) => {
        acc[turma] = (acc[turma] || 0) + 1;
        return acc;
    }, {});

    const valoresTurmas = Object.values(contagemTurmas);
    const etiquetaTurmas = Object.keys(contagemTurmas);

    // Contar votos para notebooks
    const contagemNotebooks = notebooks.reduce((acc, notebook) => {
        acc[notebook] = (acc[notebook] || 0) + 1;
        return acc;
    }, {});

    const valoresNotebooks = Object.values(contagemNotebooks);
    const etiquetaNotebooks = Object.keys(contagemNotebooks);

    // Configuração do gráfico para turmas
    const dataTurmas = [
        {
            values: valoresTurmas,
            labels: etiquetaTurmas,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ];

    const layoutTurmas = {
        title: 'Distribuição das Turmas',
        plot_bgcolor: pegarCSS('--cinza'),
        paper_bgcolor: pegarCSS('--laranja')
    };

    // Criação do gráfico para turmas
    const graficoTurmas = document.createElement('div');
    graficoTurmas.className = 'grafico-turmas';
    document.getElementById('caixa-grafico').appendChild(graficoTurmas);
    Plotly.newPlot(graficoTurmas, dataTurmas, layoutTurmas);

    // Configuração do gráfico para notebooks
    const dataNotebooks = [
        {
            values: valoresNotebooks,
            labels: etiquetaNotebooks,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ];

    const layoutNotebooks = {
        title: 'Preferências de Notebooks',
        plot_bgcolor: pegarCSS('--cinza'),
        paper_bgcolor: pegarCSS('--laranja')
    };

    // Criação do gráfico para notebooks
    const graficoNotebooks = document.createElement('div');
    graficoNotebooks.className = 'grafico-notebooks';
    document.getElementById('caixa-grafico').appendChild(graficoNotebooks);
    Plotly.newPlot(graficoNotebooks, dataNotebooks, layoutNotebooks);

    // Adicionando descrição
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');
    paragrafo.innerHTML = 'Essa análise mostra a distribuição das turmas e as preferências de notebooks com base nas respostas dos participantes da pesquisa.';
    document.getElementById('caixa-grafico').appendChild(paragrafo);
}

graficosNotebooks();
