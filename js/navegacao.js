import { renderizarConcertos } from "./concertos.js";
import { restaurarCadastro } from "./armazenamento.js";

const rotas = {
    "index.html": "index.html",
    "sobre.html": "sobre.html",
    "projetos.html": "projetos.html",
    "concertos.html": "concertos.html",
    "musicos.html": "musicos.html",
    "cadastro.html": "cadastro.html",
    "contato.html": "contato.html"
};

export async function navegar(url, adicionarHistorico = true) {
    const app = document.querySelector("#app");

    if (!app) return;

    try {
        const arquivo = url.split("/").pop() || "index.html";

        if (!rotas[arquivo]) {
            window.location.href = url;
            return;
        }

        const resposta = await fetch(rotas[arquivo]);

        if (!resposta.ok) {
            throw new Error(
                "Não foi possível carregar a página."
            );
        }

        const html = await resposta.text();

        const documento = new DOMParser().parseFromString(
            html,
            "text/html"
        );

        const novoConteudo = documento.querySelector("main");

        if (!novoConteudo) {
            throw new Error(
                "A página não possui uma área main."
            );
        }

        app.innerHTML = novoConteudo.innerHTML;

        document.title = documento.title;

        if (adicionarHistorico) {
            history.pushState({}, "", arquivo);
        }

        renderizarConcertos();
        restaurarCadastro();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } catch (erro) {
        console.error(erro);

        app.innerHTML = `
            <section>
                <h2>Erro ao carregar a página</h2>
                <p>Não foi possível carregar o conteúdo solicitado.</p>
            </section>
        `;
    }
}

export function inicializarNavegacao() {
    document.addEventListener("click", (event) => {
        const link = event.target.closest("a");

        if (!link) return;

        const href = link.getAttribute("href");

        if (!href) return;

        if (
            href.startsWith("http") ||
            href.startsWith("#") ||
            href.startsWith("mailto:")
        ) {
            return;
        }

        if (!href.endsWith(".html")) {
            return;
        }

        event.preventDefault();

        navegar(href);
    });

    window.addEventListener("popstate", () => {
        const arquivo =
            window.location.pathname.split("/").pop()
            || "index.html";

        navegar(arquivo, false);
    });
}