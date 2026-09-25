import { inicializarNavegacao } from "./navegacao.js";
import { renderizarConcertos } from "./concertos.js";
import { inicializarFormulario } from "./formulario.js";
import { restaurarCadastro } from "./armazenamento.js";

inicializarNavegacao();
inicializarFormulario();

restaurarCadastro();   // primeiro restaura os dados
renderizarConcertos(); // depois renderiza com os dados corretos