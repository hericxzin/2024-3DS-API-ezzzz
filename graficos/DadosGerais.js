const url = 'https://raw.githubusercontent.com/hericxzin/guardarnotebook/refs/heads/main/books.json';

async function visualizarInfos() {
    try {
        // Faz a requisição para obter os dados
        const res = await fetch(url);
        
        // Verifica se a resposta foi bem-sucedida
        if (!res.ok) {
            throw new Error('Network response was not ok: ' + res.statusText);
        }

        const dados = await res.json();
        
        // Verifica se os dados foram encontrados
        if (dados.length === 0) {
            throw new Error('Nenhum dado encontrado');
        }

        // Obtém informações do primeiro notebook
        const notebookMaisVendido = dados[0].notebook;
        const numeroVendas = dados[0].votos; // Mantenha o nome, mas pode ser "vendas"
        const comentarios = dados[0].comentario;

        // Log dos comentários no console
        console.log(dados.comentarios);

        // Cria o parágrafo para exibir as informações
        const paragrafo = document.createElement("p");
        paragrafo.classList.add("caixa-grafico__texto");
        paragrafo.innerHTML = `
            Essa pesquisa buscou fazer um levantamento dos notebooks mais vendidos.
            Foi possível concluir que o notebook <span>${notebookMaisVendido}</span> ficou em primeiro lugar,
            com aproximadamente <span>${numeroVendas}</span> vendas. O principal comentário sobre o notebook foi: 
            <span>${comentarios}</span>`;
        
        // Adiciona o parágrafo à caixa do gráfico
        const caixa = document.getElementById("caixa-grafico");
        caixa.appendChild(paragrafo);
    } catch (error) {
        console.error('Houve um problema com a requisição Fetch:', error);
    }
}

// Chama a função para visualizar as informações
visualizarInfos();
