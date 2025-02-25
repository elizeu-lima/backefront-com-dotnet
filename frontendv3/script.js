const API_URL = "https://localhost:5001/api/produtos"; // URL da API

// Elementos do DOM
const produtoForm = document.getElementById("produtoForm");
const produtosList = document.getElementById("produtosList");
const nomeInput = document.getElementById("nome");
const precoInput = document.getElementById("preco");
const idInput = document.getElementById("id");
const salvarBtn = document.getElementById("salvarBtn");

// Função para carregar produtos
async function carregarProdutos() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }
        const produtos = await response.json();
        produtosList.innerHTML = "";

        produtos.forEach(produto => {
            const li = document.createElement("li");
            li.innerHTML = `
        <span>${produto.nome} - R$ ${produto.preco}</span>
        <div>
            <button class="editar" onclick="editarProduto(${produto.id})">Editar</button>
            <button class="excluir" onclick="deletarProduto(${produto.id})">Excluir</button>
            </div>
        `;
            produtosList.appendChild(li);
        });
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        alert("Erro ao carregar produtos. Verifique o console para mais detalhes.");
    }
}

// Função para adicionar/editar produto
produtoForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const produto = {
        id: idInput.value ? parseInt(idInput.value) : 0,
        nome: nomeInput.value,
        preco: parseFloat(precoInput.value)
    };

    try {
        const url = produto.id ? `${API_URL}/${produto.id}` : API_URL;
        const method = produto.id ? "PUT" : "POST";

        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }

        carregarProdutos();
        produtoForm.reset();
        idInput.value = "";
        salvarBtn.textContent = "Adicionar Produto";
    } catch (error) {
        console.error("Erro ao salvar produto:", error);
        alert("Erro ao salvar produto. Verifique o console para mais detalhes.");
    }
});

// Função para editar produto
async function editarProduto(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }
        const produto = await response.json();

        idInput.value = produto.id;
        nomeInput.value = produto.nome;
        precoInput.value = produto.preco;
        salvarBtn.textContent = "Atualizar Produto";
    } catch (error) {
        console.error("Erro ao editar produto:", error);
        alert("Erro ao editar produto. Verifique o console para mais detalhes.");
    }
}

// Função para deletar produto
async function deletarProduto(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }

        carregarProdutos();
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        alert("Erro ao deletar produto. Verifique o console para mais detalhes.");
    }
}

// Carregar produtos ao iniciar
carregarProdutos();