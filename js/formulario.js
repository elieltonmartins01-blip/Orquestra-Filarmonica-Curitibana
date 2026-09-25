import { salvarCadastro } from "./armazenamento.js";

export function inicializarFormulario() {
    document.addEventListener("input", (event) => {
        if (!event.target.matches("input, textarea, select")) {
            return;
        }

        const campo = event.target;

        campo.setAttribute("data-interagido", "true");
    });

    document.addEventListener("submit", (event) => {
        event.preventDefault();

        const formulario = event.target;

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        salvarCadastro(formulario);

        let mensagem = formulario.querySelector(
            ".mensagem-formulario"
        );

        if (!mensagem) {
            mensagem = document.createElement("p");

            mensagem.className = "mensagem-formulario";
            mensagem.setAttribute("role", "status");
            mensagem.setAttribute("aria-live", "polite");

            formulario.appendChild(mensagem);
        }

        mensagem.textContent =
            "Cadastro salvo com sucesso!";
    });
}