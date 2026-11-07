export function configurarAgendamento() {
    const formulario = document.querySelector("#appointment-form");

    if (!formulario) return;

    const campoData = document.querySelector("#appointment-date");

    // Impede selecionar datas anteriores ao dia atual
    const hoje = new Date();
    const dataAtual = new Date(
        hoje.getTime() - hoje.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    campoData.min = dataAtual;

    // Envio do formulário
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        // Captura os valores dos campos
        const nome = document.querySelector("#name").value.trim();
        const nascimento = document.querySelector("#birth").value;
        const cpf = document.querySelector("#cpf").value.trim();
        const telefone = document.querySelector("#phone").value.trim();
        const servico = document.querySelector("#service").value;
        const data = document.querySelector("#appointment-date").value;
        const horario = document.querySelector("#appointment-time").value;
        const observacoes = document.querySelector("#notes").value.trim();

        // Verifica os campos obrigatórios
        if (
            !nome ||
            !nascimento ||
            !cpf ||
            !telefone ||
            !servico ||
            !data ||
            !horario
        ) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Verifica se a data escolhida é válida
        if (data < dataAtual) {
            alert("Escolha uma data válida para o agendamento.");
            return;
        }

        // Formata a data para o padrão brasileiro
        const dataFormatada = new Date(
            `${data}T12:00:00`
        ).toLocaleDateString("pt-BR");

        // Número do WhatsApp da clínica
        // Substitua pelo número real, incluindo DDI e DDD.
        const numeroWhatsApp = "5585999999999";

        // Monta a mensagem
        const mensagem = `
            Olá! Gostaria de solicitar um agendamento.

            *Dados do paciente:*
            Nome: ${nome}
            Telefone: ${telefone}

            *Agendamento:*
            Serviço: ${servico}
            Data: ${dataFormatada}
            Horário: ${horario}

            *Observações:*
            ${observacoes || "Nenhuma observação."}

            Aguardo a confirmação. Obrigada!
        `;

        // Codifica a mensagem para a URL
        const mensagemCodificada = encodeURIComponent(mensagem);

        // Cria o link do WhatsApp
        const linkWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

        // Abre o WhatsApp
        window.open(linkWhatsApp, "_blank", "noopener,noreferrer");
    });
}