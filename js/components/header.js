
const logoUrl = new URL("../../assets/icons/ico.logo.png", import.meta.url).href;

export function configurarMenuResponsivo() {
    const header = document.querySelector("header");
    const botaoMenu = document.querySelector(".menu-toggle");
    const menu = document.querySelector("header .menu");

    if (!header || !botaoMenu || !menu) return;

    // Abrir e fechar menu lateral
    botaoMenu.addEventListener("click", () => {
        const menuAberto = header.classList.toggle("menu-aberto");

        botaoMenu.innerHTML = menuAberto ? "&times;" : "&#9776;";
        botaoMenu.setAttribute("aria-expanded", menuAberto);
    });

    // Fechar menu ao clicar em um link
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            header.classList.remove("menu-aberto");

            botaoMenu.innerHTML = "&#9776;";
            botaoMenu.setAttribute("aria-expanded", "false");
        });
    });

    // Fechar menu ao voltar para notebook
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
            header.classList.remove("menu-aberto");

            botaoMenu.innerHTML = "&#9776;";
            botaoMenu.setAttribute("aria-expanded", "false");
        }
    });
}


export function Header() {
    return `
        <header>

            <div class="logo">
                <img
                    src="${logoUrl}"
                    alt="Logo"
                    width="50"
                    height="50"
                >

                <span>
                    <h2>Dra. Helena Lopes</h2>
                    <p>Fisioterapeuta</p>
                </span>
            </div>

            <button
                class="menu-toggle"
                aria-label="Abrir menu"
                aria-expanded="false"
                type="button"
            >
                &#9776;
            </button>

            <nav class="menu">
                <ul>
                    <li><a href="../index.html#inicio">Início</a></li>
                    <li><a href="../index.html#sobre">Sobre</a></li>
                    <li><a href="../index.html#servicos">Serviços</a></li>
                    <li><a href="../index.html#contato">Contato</a></li>
                    <li><a href="#" class="btn-duvidas">Dúvidas</a></li>
                </ul>

                <a class="cta-button" href="../PagesHTML/contato.html">
                    <i class="bi bi-calendar-plus"></i>
                    Agende uma Consulta
                </a>
            </nav>

        </header>
    `;
}
