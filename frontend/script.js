async function carregarDados() {
    const url = "https://animated-space-potato-xrv65rwx4p7526j9q-3000.app.github.dev/ls
    ";

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Erro na API");
        }

        const produtos = await resposta.json();

        const listaProdutos = document.getElementById("lista-produtos");

        listaProdutos.innerHTML = "";

        produtos.forEach((produto) => {
            listaProdutos.innerHTML += `
                <div class="card">
                    <img src="imagens/${produto.imagem}" alt="${produto.nome}">

                    <h2>${produto.nome}</h2>

                    <p>Categoria: ${produto.categoria}</p>

                    <p class="preco">R$ ${produto.preco}</p>
                </div>
            `;
        });

    } catch (erro) {
        console.error("Erro ao carregar os produtos:", erro);

        document.getElementById("lista-produtos").innerHTML =
            "<p>Erro ao carregar os produtos.</p>";
    }
}

carregarDados();