
const assetsUrl = new URL("../../assets/icons/", import.meta.url);

const servicos = [
    {
        icone: new URL("icone1.png", assetsUrl).href,
        titulo: "Fisioterapia Ortopédica <br> e Traumatológica",
        descricao: "Tratamento para lesões, dores e recuperação pós-cirúrgica.",
        
    },

    {
        icone: new URL("icone2.png", assetsUrl).href,
        titulo: "Fisioterapia Esportiva",
        descricao: "Prevenção e reabilitação de lesões esportivas.",
        pages: "./PagesHTML/sobre_esportiva.html"
    },

    {
        icone: new URL("icone3.png", assetsUrl).href,
        titulo: "Fisioterapia Neurológica",
        descricao: "Tratamento para condições neurológicas e recuperação funcional.",
        
    },

    {
        icone: new URL("icone4.png", assetsUrl).href,
        titulo: "Pilates Clínico",
        descricao: "Fortalecimento, mobilidade e equilíbrio corporal.",

    },

    {
        icone: new URL("icone5.png", assetsUrl).href,
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
