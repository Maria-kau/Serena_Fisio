
const servicos = [
    {
        icone: "assets/icons/icone1.png",
        titulo: "Fisioterapia Ortopédica <br> e Traumatológica",
        descricao: "Tratamento para lesões, dores e recuperação pós-cirúrgica.",
        
    },

    {
        icone: "assets/icons/icone2.png",
        titulo: "Fisioterapia Esportiva",
        descricao: "Prevenção e reabilitação de lesões esportivas.",
        pages: "./PagesHTML/sobre_esportiva.html"
    },

    {
        icone: "assets/icons/icone3.png",
        titulo: "Fisioterapia Neurológica",
        descricao: "Tratamento para condições neurológicas e recuperação funcional.",
        
    },

    {
        icone: "assets/icons/icone4.png",
        titulo: "Pilates Clínico",
        descricao: "Fortalecimento, mobilidade e equilíbrio corporal.",

    },

    {
        icone: "assets/icons/icone5.png",
        titulo: "Reabilitação Funcional",
        descricao: "Recupera sua autonomia e qualidade de vida.",
    }
];

export function Servicos() {

    return `
        <div class="services-list">

            ${servicos.map(servico => `

                <div class="service-card">

                    <img
                        src="${servico.icone}"
                        alt="${servico.titulo}"
                        width="50"
                        height="50"
                    >

                    <h3>${servico.titulo}</h3>

                    <p>${servico.descricao}</p>

                </div>

            `).join("")}

        </div>
    `;
}


//export function NOME DA FUNÇÃO() {
//    return `
//        <div class="nome da classe">
//           ${NOME DA FUNÇÃO.map(NOME DO OBJETO => `
//                <div class="nome da classe do objeto">
//                    <img src="${NOME DO OBJETO.icone}" alt="${NOME DO OBJETO.titulo}" width="50px" height="50px">
//        </div>
//    `).join('')}
//   `;
