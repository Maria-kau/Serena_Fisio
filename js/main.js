
import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { Servicos } from "./pages/servicos.js";
import { Duvida } from "./pages/duvida.js";

// Elementos principais
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
const servicesContainer = document.querySelector("#services-container");

// Inserir cabeçalho
if (header) {
    header.innerHTML = Header();
}

// Inserir rodapé
if (footer) {
    footer.innerHTML = Footer();
}

// Inserir serviços
if (servicesContainer) {
    servicesContainer.innerHTML = Servicos();
}

// Evento do botão de dúvidas
document.addEventListener("click", (event) => {

    // Verifica se o clique foi no botão Dúvidas
    if (event.target.closest("#btn-duvidas")) {
        event.preventDefault();

        const cardExistente = document.getElementById("duvidas");

        if (cardExistente) {
            cardExistente.remove();
        } else {
            document.body.insertAdjacentHTML("beforeend", Duvida());
        }
    }

    // Verifica se clicou no botão fechar
    if (event.target.closest("#fechar-duvidas")) {
        document.getElementById("duvidas")?.remove();
    }
});


// Abrir e fechar o card de dúvidas respondidas
document.addEventListener("click", (event) => {

    // Abrir segundo card
    if (event.target.closest("#btn-card-duvidas")) {
        event.preventDefault();

        const cardLista = document.getElementById("card-lista-duvidas");

        if (cardLista) {
            cardLista.style.display = "block";
        }
    }

    // Fechar segundo card e voltar ao formulário
    if (event.target.closest("#fechar-card-duvida")) {
        const cardLista = document.getElementById("card-lista-duvidas");

        if (cardLista) {
            cardLista.style.display = "none";
        }
    }

    // Fechar card principal
    if (event.target.closest("#fechar-duvidas")) {
        document.getElementById("duvidas")?.remove();
    }

});



document.addEventListener("submit", (event) => {

    // Verifica se o formulário enviado é o de dúvidas
    if (event.target.id !== "duvida-form") return;

    event.preventDefault();

    // Capturar os valores dos campos
    const nome = document.getElementById("nome-duvida").value.trim();
    const pergunta = document.getElementById("texto-duvida").value.trim();

    // Verificar se os campos estão preenchidos
    if (!nome || !pergunta) return;

    // Selecionar a lista
    const lista = document.getElementById("lista-duvidas");

    // Criar um novo item
    const item = document.createElement("li");

    // Criar o nome
    const nomeElemento = document.createElement("strong");
    nomeElemento.textContent = nome;

    // Criar a mensagem
    const mensagemElemento = document.createElement("p");
    mensagemElemento.textContent = pergunta;

    // Colocar nome e mensagem dentro do item
    item.appendChild(nomeElemento);
    item.appendChild(mensagemElemento);

    // Adicionar o item à lista
    lista.appendChild(item);

    // Esconder mensagem de lista vazia
    const mensagemVazia = document.getElementById("mensagem-vazia");

    if (mensagemVazia) {
        mensagemVazia.hidden = true;
    }

    // Limpar os campos
    event.target.reset();

});
