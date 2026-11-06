
export function Duvida() {
    return `
        <div id="duvidas" class="duvidas-card">

            <button
                id="fechar-duvidas"
                type="button"
                aria-label="Fechar"
            >
                &times;
            </button>

            <h2>Olá! Qual é a sua dúvida?</h2>

            <p>
                Estamos aqui para ajudar você.
            </p>

            <a href="#" id="btn-card-duvidas">
                Clique para ver dúvidas respondidas
            </a>

            <form id="duvida-form">

                <div class="campo">
                    <label for="nome-duvida">Seu nome</label>

                    <input
                        type="text"
                        id="nome-duvida"
                        placeholder="Digite seu nome"
                        required
                    >
                </div>

                <div class="campo">
                    <label for="texto-duvida">Sua dúvida</label>

                    <textarea
                        id="texto-duvida"
                        placeholder="Escreva sua dúvida..."
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button type="submit" class="btn-enviar">
                    Enviar dúvida
                </button>

            </form>

            <div id="card-lista-duvidas" class="lista-container">

                <button
                    id="fechar-card-duvida"
                    type="button"
                    aria-label="Fechar"
                >
                    &times;
                </button>

                <h3>Dúvidas enviadas</h3>

                <p id="mensagem-vazia">
                    Ainda não há dúvidas cadastradas.
                </p>

                <ul id="lista-duvidas"></ul>

            </div>

        </div>
    `;
}
