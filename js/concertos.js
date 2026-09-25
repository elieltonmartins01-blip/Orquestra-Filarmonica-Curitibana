const concertos = [
    {
        titulo: "Concerto de Primavera",
        tipo: "Evento",
        destaque: "Destaque",
        descricao: "Uma apresentação especial com obras de diferentes períodos da música de concerto.",
        data: "20 de setembro de 2026",
        local: "Curitiba, Paraná"
    },
    {
        titulo: "Concerto da Temporada 2026",
        tipo: "Evento",
        destaque: "Inscrições abertas",
        descricao: "Apresentação integrante da temporada oficial de concertos da Orquestra Filarmônica Curitibana.",
        data: "18 de outubro de 2026",
        local: "Curitiba, Paraná"
    },
    {
        titulo: "Concerto Social",
        tipo: "Projeto social",
        destaque: "Destaque",
        descricao: "Apresentação voltada à aproximação da música de concerto com diferentes públicos da comunidade.",
        data: "22 de novembro de 2026",
        local: "Curitiba, Paraná"
    },
    {
        titulo: "Encerramento da Temporada",
        tipo: "Evento",
        destaque: "Projeto social",
        descricao: "Concerto de encerramento da temporada 2026, celebrando a música e o trabalho desenvolvido pela orquestra durante o ano.",
        data: "12 de dezembro de 2026",
        local: "Curitiba, Paraná"
    }
];

export function renderizarConcertos() {
    const lista = document.querySelector("#lista-concertos");

    if (!lista) return;

    lista.innerHTML = concertos.map(concerto => `
        <article>
            <h3>${concerto.titulo}</h3>

            <div class="badges">
                <span class="badge badge-evento">${concerto.tipo}</span>
                <span class="badge badge-destaque">${concerto.destaque}</span>
            </div>

            <p>${concerto.descricao}</p>

            <p>
                <strong>Data:</strong> ${concerto.data}
            </p>

            <p>
                <strong>Local:</strong> ${concerto.local}
            </p>
        </article>
    `).join("");
}