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

// Eventos de clique
document.addEventListener("click", (event) => {

    // Abrir ou fechar o card de dúvidas
    if (event.target.closest("#btn-duvidas")) {
        event.preventDefault();

        const cardExistente = document.getElementById("duvidas");

        if (cardExistente) {
            cardExistente.remove();
            document.body.classList.remove("modal-aberto");
        } else {
            document.body.insertAdjacentHTML("beforeend", Duvida());
            document.body.classList.add("modal-aberto");
        }
    }

    // Fechar card principal
    if (event.target.closest("#fechar-duvidas")) {
        document.getElementById("duvidas")?.remove();
        document.body.classList.remove("modal-aberto");
    }

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
});

// Enviar dúvidas
document.addEventListener("submit", (event) => {

    // Verificar formulário
    if (event.target.id !== "duvida-form") return;

    event.preventDefault();

    // Capturar valores
    const nome = document.getElementById("nome-duvida").value.trim();
    const pergunta = document.getElementById("texto-duvida").value.trim();

    // Verificar preenchimento
    if (!nome || !pergunta) return;

    // Selecionar lista
    const lista = document.getElementById("lista-duvidas");

    // Criar item
    const item = document.createElement("li");

    // Criar nome
    const nomeElemento = document.createElement("strong");
    nomeElemento.textContent = nome;

    // Criar mensagem
    const mensagemElemento = document.createElement("p");
    mensagemElemento.textContent = pergunta;

    // Adicionar elementos
    item.appendChild(nomeElemento);
    item.appendChild(mensagemElemento);

    // Inserir na lista
    lista.appendChild(item);

    // Esconder mensagem de lista vazia
    const mensagemVazia = document.getElementById("mensagem-vazia");

    if (mensagemVazia) {
        mensagemVazia.hidden = true;
    }

    // Limpar formulário
    event.target.reset();
});