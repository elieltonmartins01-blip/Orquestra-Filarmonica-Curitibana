export function salvarCadastro(formulario) {
    const dados = {};

    const campos = formulario.querySelectorAll(
        "input, select, textarea"
    );

    campos.forEach(campo => {
        if (!campo.name) return;

        if (campo.type === "checkbox") {
            dados[campo.name] = campo.checked;
        } else {
            dados[campo.name] = campo.value;
        }
    });

    localStorage.setItem(
        "dadosCadastro",
        JSON.stringify(dados)
    );
}

export function restaurarCadastro() {
    const formulario = document.querySelector("#form-cadastro");

    if (!formulario) return;

    const dadosSalvos = localStorage.getItem("dadosCadastro");

    if (!dadosSalvos) return;

    try {
        const dados = JSON.parse(dadosSalvos);

        Object.keys(dados).forEach(nome => {
            const campo = formulario.elements[nome];

            if (!campo) return;

            if (campo.type === "checkbox") {
                campo.checked = dados[nome];
            } else {
                campo.value = dados[nome];
            }
        });
    } catch (erro) {
        console.error("Erro ao restaurar os dados:", erro);
    }
}
