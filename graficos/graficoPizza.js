import { pegarCss } from "./comum.js";

async function criarGraficoPizza() {
    const url = 'https://raw.githubusercontent.com/hericxzin/github-json/refs/heads/main/graficopizza.json'; // Atualize a URL para o seu repositório
    const res = await fetch(url);
    const dados = await res.json();
    
    // Extrai os notebooks e suas porcentagens
    const notebooks = Object.keys(dados);
    const porcentagem = Object.values(dados);

    const data = [
        {
            labels: notebooks,
            values: porcentagem,
            type: 'pie',
            marker: {
                colors: [
                    pegarCss('--azul-tecnologia'), // Cor 1
                    pegarCss('--cinza-claro'),      // Cor 2
                    pegarCss('--verde-tecnologia'),  // Cor 3
                    pegarCss('--preto'),             // Cor 4
                    pegarCss('--cinza-escuro')       // Cor 5
                ] // Cores dos setores
            }
        }
    ];

    const layout = {
        plot_bgcolor: pegarCss('--fundo-grafico'), // Cor de fundo do gráfico
        paper_bgcolor: pegarCss('--fundo-papel'),   // Cor de fundo do papel
        title: {
            text: 'Os Notebooks Mais Populares',
            font: {
                color: pegarCss('--texto-titulo'), // Cor do texto do título
                family: 'Arial, sans-serif',        // Fonte moderna
                size: 50
            }
        },
        showlegend: true,
        legend: {
            font: {
                color: pegarCss('--texto-legenda'), // Cor do texto da legenda
                family: 'Arial, sans-serif',         // Fonte da legenda
                size: 16
            }
        }
    };

    // Cria e anexa o gráfico ao DOM
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('caixa-grafico').appendChild(grafico);
    
    // Plota o gráfico
    Plotly.newPlot(grafico, data, layout);
}

// Chama a função para criar o gráfico
criarGraficoPizza();
