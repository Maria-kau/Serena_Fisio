
export function Duvida() {
    return `
        <div id="duvidas" class="duvidas-overlay">
            <section
                class="duvidas-card"
                role="dialog"
                aria-modal="true"
                aria-labelledby="titulo-duvidas"
                tabindex="-1"
            >

            <button
                id="fechar-duvidas"
                class="fechar-duvidas"
                type="button"
                aria-label="Fechar dúvidas"
            >
                &times;
            </button>

            <h2 id="titulo-duvidas">Olá! Qual é a sua dúvida?</h2>

            <p>
                Estamos aqui para ajudar você.
            </p>

            <button
                type="button"
                id="btn-card-duvidas"
                aria-controls="card-lista-duvidas"
                aria-expanded="false"
            >
                Clique para ver dúvidas respondidas
            </button>

            <form id="duvida-form">

                <div class="campo">
                    <label for="nome-duvida">Seu nome</label>

                    <input
                        type="text"
                        id="nome-duvida"
                        name="nome"
                        placeholder="Digite seu nome"
                        required
                    >
                </div>

                <div class="campo">
                    <label for="texto-duvida">Sua dúvida</label>

                    <textarea
                        id="texto-duvida"
                        name="duvida"
                        placeholder="Escreva sua dúvida..."
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button type="submit" class="btn-enviar">
                    Enviar dúvida
                </button>

            </form>

            <div id="card-lista-duvidas" class="lista-container" hidden>

                <button
                    id="fechar-card-duvida"
                    type="button"
                    aria-label="Fechar"
                >
                    &times;
                </button>

                <h3>Dúvidas enviadas</h3>

                <p id="mensagem-vazia" class="mensagem-vazia">
                    Ainda não há dúvidas cadastradas.
                </p>

                <ul id="lista-duvidas"></ul>

            </div>

            </section>
        </div>
    `;
}
