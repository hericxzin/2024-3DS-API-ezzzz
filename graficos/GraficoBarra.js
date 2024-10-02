async function criaGraficoBarra() {
    const url = "https://raw.githubusercontent.com/hericxzin/guardarnotebook/refs/heads/main/grafico"; // URL do JSON com os dados
    const res = await fetch(url);
    const dados = await res.json(); // Obtém os dados uma única vez

    // Extrai os dados para o gráfico
    const modelo = dados.map(item => item.notebook); // Nomes dos notebooks
    const vendas = dados.map(item => item.votos); // Números de vendas

    const data = [
        {
            x: modelo,
            y: vendas,
            type: 'bar',
            marker: {
                color: pegarCSS('--salmon-pink') // Usando sua função de CSS para a cor
            }
        }
    ];

    const layout = {
        title: 'Notebooks Mais Vendidos', // Título do gráfico
        xaxis: {
            title: 'Modelos de Notebooks'
        },
        yaxis: {
            title: 'Número de Vendas'
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('caixa-grafico').appendChild(grafico);
    
    Plotly.newPlot(grafico, data, layout); // Adicionando layout ao gráfico
}

// Chama a função para criar o gráfico
criaGraficoBarra();
