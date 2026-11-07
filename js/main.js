
import {
    Header,
    configurarMenuResponsivo
} from "./components/header.js";
import { Footer } from "./components/footer.js";
import { Servicos } from "./pages/servicos.js";
import { Duvida } from "./pages/duvida.js";
import { configurarAgendamento } from "./pages/contato.js";


// Elementos principais
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
const servicesContainer = document.querySelector("#services-container");

if (header) {
    header.innerHTML = Header();
    configurarMenuResponsivo();
}

// Inserir rodapé
if (footer) {
    footer.innerHTML = Footer();
}

// Inserir serviços
if (servicesContainer) {
    servicesContainer.innerHTML = Servicos();
}

let focoAnteriorDuvidas = null;

function fecharDuvidas() {
    document.getElementById("duvidas")?.remove();
    document.body.classList.remove("modal-aberto");

    if (focoAnteriorDuvidas instanceof HTMLElement) {
        focoAnteriorDuvidas.focus();
    }

    focoAnteriorDuvidas = null;
}

// Eventos de clique
document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const gatilhoDuvidas = event.target.closest(".btn-duvidas");

    if (gatilhoDuvidas) {
        event.preventDefault();

        if (document.getElementById("duvidas")) {
            fecharDuvidas();
        } else {
            focoAnteriorDuvidas = gatilhoDuvidas;
            document.body.insertAdjacentHTML("beforeend", Duvida());
            document.body.classList.add("modal-aberto");
            document.querySelector(".duvidas-card")?.focus();
        }

        return;
    }

    if (
        event.target.id === "duvidas" ||
        event.target.closest("#fechar-duvidas")
    ) {
        fecharDuvidas();
        return;
    }

    if (event.target.closest("#btn-card-duvidas")) {
        const cardLista = document.getElementById("card-lista-duvidas");

        if (cardLista) {
            cardLista.hidden = false;
            event.target
                .closest("#btn-card-duvidas")
                .setAttribute("aria-expanded", "true");
        }

        return;
    }

    if (event.target.closest("#fechar-card-duvida")) {
        const cardLista = document.getElementById("card-lista-duvidas");

        if (cardLista) {
            cardLista.hidden = true;
            document
                .getElementById("btn-card-duvidas")
                ?.setAttribute("aria-expanded", "false");
        }
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.getElementById("duvidas")) {
        fecharDuvidas();
    }
});

// Enviar dúvidas
document.addEventListener("submit", (event) => {
    if (
        !(event.target instanceof HTMLFormElement) ||
        event.target.id !== "duvida-form"
    ) {
        return;
    }

    event.preventDefault();

    const formulario = event.target;
    const dados = new FormData(formulario);
    const nome = String(dados.get("nome") || "").trim();
    const pergunta = String(dados.get("duvida") || "").trim();
    const lista = document.querySelector("#duvidas #lista-duvidas");

    if (!nome || !pergunta || !lista) return;

    const item = document.createElement("li");
    const nomeElemento = document.createElement("strong");
    nomeElemento.textContent = nome;
    const mensagemElemento = document.createElement("p");
    mensagemElemento.textContent = pergunta;

    item.appendChild(nomeElemento);
    item.appendChild(mensagemElemento);
    lista.appendChild(item);

    const mensagemVazia = document.querySelector(
        "#duvidas #mensagem-vazia"
    );
    if (mensagemVazia) {
        mensagemVazia.hidden = true;
    }

    formulario.reset();
});
//

// Configurar agendamento
configurarAgendamento();