/* MENU MOBILE */
const botaoMenu = document.getElementById("botao-menu");
const listaNavegacao = document.getElementById("lista-navegacao");

if (botaoMenu && listaNavegacao) {
    botaoMenu.addEventListener("click", () => {
        listaNavegacao.classList.toggle("aberto");
        botaoMenu.classList.toggle("ativo");
    });
}

/* FECHAR MENU AO CLICAR EM UM LINK */
const linksNavegacao = document.querySelectorAll(".link-navegacao");

linksNavegacao.forEach((link) => {
    link.addEventListener("click", () => {
        if (listaNavegacao) listaNavegacao.classList.remove("aberto");
        if (botaoMenu) botaoMenu.classList.remove("ativo");
    });
});

/* FILTRO DE PROJETOS */
const botoesFiltro = document.querySelectorAll(".filtro-projeto");
const cartoesProjeto = document.querySelectorAll(".cartao-projeto");

botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
        const filtro = botao.dataset.filtro;

        botoesFiltro.forEach((item) => {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        cartoesProjeto.forEach((projeto) => {
            const categoria = projeto.dataset.categoria;
            if (filtro === "todos" || categoria === filtro) {
                projeto.style.display = "block";
            } else {
                projeto.style.display = "none";
            }
        });
    });
});

/* ANIMAÇÕES DE ROLAGEM */
const elementosAnimados = document.querySelectorAll(
    ".cartao-informacao, .cartao-habilidade, .cartao-habilidade-simples, .cartao-projeto, .item-tempo"
);

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("elemento-visivel");
        } else {
            entrada.target.classList.remove("elemento-visivel");
        }
    });
}, {
    threshold: 0.15
});

elementosAnimados.forEach((elemento) => {
    observador.observe(elemento);
});

/* MENU ATIVO CONFORME ROLAGEM DA PÁGINA */
const secoes = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    let secaoAtual = "";

    secoes.forEach((secao) => {
        const distanciaTopo = secao.offsetTop - 150;
        if (window.scrollY >= distanciaTopo) {
            secaoAtual = secao.id;
        }
    });

    linksNavegacao.forEach((link) => {
        link.classList.remove("ativo");
        if (link.getAttribute("href") === `#${secaoAtual}`) {
            link.classList.add("ativo");
        }
    });
});

/* FORMULÁRIO DE CONTATO */
const formulario = document.getElementById("formulario-contato");
const mensagemFormulario = document.getElementById("mensagem-formulario");

if (formulario && mensagemFormulario) {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            mensagemFormulario.textContent = "Preencha todos os campos.";
            return;
        }

        mensagemFormulario.textContent = "Mensagem preparada com sucesso!";
        formulario.reset();
    });
}

/* EFEITO NO CABEÇALHO AO ROLAR A TELA */
const cabecalho = document.querySelector(".cabecalho");

if (cabecalho) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            cabecalho.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.15)";
        } else {
            cabecalho.style.boxShadow = "none";
        }
    });
}
