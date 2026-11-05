export function Header() {
  return `
        <header>
            <div class="logo">
                <img src="assets/icons/ico.logo.png" alt="Logo" width="50" height="50">
                <span>
                    <h2>Dra. Helena Lopes</h2>
                    <p>Fisioterapeuta</p>
                </span>
                
            </div>

            <nav class="menu">
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>

            <a class="cta-button" href="PagesHTML/contato.html">
                <i class="bi bi-calendar-plus"></i>
                Agende uma Consulta
              </a>
        </header>
    `;
}
