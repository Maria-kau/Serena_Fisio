
export function Footer() {
    return `
        <footer>
            
            <div class="logo">
                <img src="assets/icons/ico.logo.png" alt="Logo" width="50" height="50">
                <span>Dra. Helena Lopes</span>
            </div>
            <div class="container">
                <nav class="menu">
                    <ul>
                        <li><a href="index.html">Início</a></li>
                        <li><a href="sobre.html">Sobre</a></li>
                        <li><a href="servicos.html">Serviços</a></li>
                        <li><a href="depoimento.html">Depoimentos</a></li>
                        <li><a href="contato.html">Contato</a></li>
                    </ul>
                </nav>
                <p>
                    &copy; 2026 Dra. Helena Lopes.
                    Este é um site de exemplo, os dados são fictícios, dados de contato são fictícios.
                </p>
            </div>
            <div class="social-media">
                <a href="https://www.instagram.com/helena_lopes_fisio/" target="_blank">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.facebook.com/helena.lopes.180" target="_blank">
                    <i class="bi bi-facebook"></i>
                </a> 
            </div>
        </footer>
    `;
}
