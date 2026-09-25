# Orquestra Filarmônica Curitibana

Aplicação web desenvolvida para a Orquestra Filarmônica Curitibana, com foco em apresentação institucional, divulgação de projetos, concertos, músicos e formas de participação.

O projeto foi desenvolvido como experiência prática de desenvolvimento web, aplicando conceitos de HTML semântico, CSS responsivo, JavaScript modular, manipulação do DOM, validação de formulários, persistência de dados, controle de versões, build e deploy contínuo.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript ES6+
* Vite
* Git
* GitHub
* GitHub Actions
* GitHub Pages
* LocalStorage

## Estrutura do projeto

```text
Orquestra-Filarmonica-Curitibana/
├── assets/
├── css/
├── js/
│   ├── armazenamento.js
│   ├── concertos.js
│   ├── formulario.js
│   ├── main.js
│   └── navegacao.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── cadastro.html
├── concertos.html
├── contato.html
├── index.html
├── musicos.html
├── pagina-web.html
├── projetos.html
├── sobre.html
├── vite.config.mjs
├── package.json
└── .gitignore
```

## Funcionalidades

* Navegação entre páginas sem recarregamento completo utilizando JavaScript.
* Renderização dinâmica dos concertos a partir de dados estruturados em JavaScript.
* Formulários com validação utilizando recursos do HTML5 e JavaScript.
* Persistência dos dados do cadastro utilizando LocalStorage.
* Feedback visual para campos válidos e inválidos.
* Mensagem de confirmação após o cadastro.
* Layout responsivo para diferentes tamanhos de tela.
* Estrutura semântica utilizando elementos como `header`, `nav`, `main`, `section`, `article` e `footer`.
* Estados de foco e interação para melhorar a acessibilidade.

## Organização do JavaScript

O código foi dividido em módulos utilizando ES6 Modules.

* `main.js`: ponto de entrada da aplicação.
* `navegacao.js`: controla a navegação e o histórico da aplicação.
* `concertos.js`: contém os dados e a renderização dinâmica dos concertos.
* `formulario.js`: controla eventos, validação e submissão dos formulários.
* `armazenamento.js`: realiza a gravação e recuperação dos dados utilizando LocalStorage.

Essa separação reduz o acoplamento entre as funcionalidades e facilita a manutenção do projeto.

## Build de produção

O Vite foi utilizado para gerar a versão de produção da aplicação.

Para instalar as dependências:

```bash
npm install
```

Para executar o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

Para gerar a build de produção:

```bash
npm run build
```

A versão otimizada da aplicação é gerada na pasta `dist`.

Para visualizar a build localmente:

```bash
npm run preview
```

## Controle de versões

O projeto utiliza Git e GitHub para controle de versões.

Foi adotado um fluxo baseado no GitFlow, utilizando:

* `master`: versão estável do projeto.
* `develop`: desenvolvimento e integração das funcionalidades.
* `feature/*`: desenvolvimento de funcionalidades específicas.

Entre as branches utilizadas estão:

```text
master
develop
feature/modularizacao-javascript
feature/configuracao-vite
```

As funcionalidades foram desenvolvidas em branches específicas e posteriormente integradas à `develop` e à versão estável.

## CI/CD e Deploy

O deploy foi configurado utilizando GitHub Actions e GitHub Pages.

Quando uma alteração é enviada para a branch `master`, o workflow executa automaticamente as etapas de:

1. Checkout do código.
2. Configuração do Node.js.
3. Instalação das dependências.
4. Geração da build com Vite.
5. Preparação dos arquivos para o GitHub Pages.
6. Publicação da aplicação.

O workflow está localizado em:

```text
.github/workflows/deploy.yml
```

A aplicação é disponibilizada publicamente pelo GitHub Pages.

## Acessibilidade

O projeto utiliza recursos de HTML semântico e boas práticas de acessibilidade, incluindo:

* Associação entre `label` e campos de formulário.
* Uso de atributos `required`, `type` e `pattern`.
* Hierarquia de títulos.
* Texto alternativo para imagens.
* Estados de foco visíveis.
* Feedback visual para validação dos campos.
* Uso de `role="status"` e `aria-live="polite"` para mensagens de confirmação.

## Responsividade

A interface foi desenvolvida utilizando CSS responsivo e Flexbox, com diferentes breakpoints para adaptação a computadores, tablets e dispositivos móveis.

Também foi utilizado um conjunto de variáveis CSS para centralizar cores, tipografia e espaçamentos, facilitando a manutenção da identidade visual.

## Validação

Durante o desenvolvimento foram realizados testes de funcionamento das páginas, formulários, navegação, renderização dinâmica, persistência de dados e build de produção.

As páginas HTML também foram validadas utilizando o W3C Validator.

A aplicação foi avaliada com Lighthouse em ambiente móvel, obtendo desempenho de 100/100 na versão de produção testada.

## Autor

Elielton Martins

Projeto acadêmico desenvolvido como parte da formação em Análise e Desenvolvimento de Sistemas.
