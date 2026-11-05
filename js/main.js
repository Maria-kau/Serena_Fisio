
import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { Servicos } from "./pages/servicos.js";

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
