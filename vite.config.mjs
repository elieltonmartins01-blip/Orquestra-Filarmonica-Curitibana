import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rolldownOptions: {
            input: {
                index: resolve("index.html"),
                sobre: resolve("sobre.html"),
                projetos: resolve("projetos.html"),
                concertos: resolve("concertos.html"),
                musicos: resolve("musicos.html"),
                cadastro: resolve("cadastro.html"),
                contato: resolve("contato.html"),
                paginaWeb: resolve("pagina-web.html")
            }
        }
    }
});
