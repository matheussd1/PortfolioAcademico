
const dadosPessoais = {
    nome: "Matheus Dias",
    cargo: "Desenvolvedor Full-Stack",
    bio: "Desenvolvedor junior",
    github: "https://github.com/matheussd1",
    linkedin: "https://www.linkedin.com/in/matheusrpdias/"
};

const projetos = [
    {
        nome: "Aerocode",
        descricao: "Sistema CLI desenvolvido em TypeScript para gestão de produção e manutenção de aeronaves.",
        tecnologias: ["Node.js", "TypeScript"],
        link: "https://github.com/matheussd1/Aerocode"
    },
    {
        nome: "API com DM Card",
        descricao: "API robusta para consulta de indicadores financeiros e KPIs estaduais com banco de dados SQLite.",
        tecnologias: ["Node.js", "Express", "SQLite"],
        link: "https://github.com/TeamMinerva/DM-API"
    }
];

const habilidades = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "Node.js", "Express", "SQL", "Git", "GitHub"
];


const formacaoAcademica = [
    {
        curso: "Análise e Desenvolvimento de Sistemas",
        instituicao: "FATEC SJC - Prof. Jessen Vidal",
        periodo: "2025 - 2027"
    },
    {
        curso: "Ensino Médio",
        instituicao: "Colégio Inspire",
        periodo: "2022 - 2024"
    },
];


//funcoes 

function carregarFormacao() {
    const container = document.getElementById('lista-formacao');
    container.innerHTML = ""; // Limpa antes de preencher

    formacaoAcademica.forEach(f => {
        container.innerHTML += `
            <div class="formacao-item">
                <h3 class="curso-nome">${f.curso}</h3>
                <p class="instituicao-nome">${f.instituicao} | <span class="periodo">${f.periodo}</span></p>
            </div>
        `;
    });
}

// hora do dia responsiva ( requisto 1)
function gerarSaudacao() {
    const hora = new Date().getHours();
    const saudacaoElement = document.getElementById('saudacao');
    let mensagem;

    if (hora >= 5 && hora < 12) {
        mensagem = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        mensagem = "Boa tarde";
    } else {
        mensagem = "Boa noite";
    }

    saudacaoElement.innerText = `${mensagem}, me chamo`;
}

// renderizar os projetos (ja atende requisitos 2 e 3 )
function renderizarProjetos() {
    const container = document.getElementById('grid-projetos');
    container.innerHTML = ""; 

    projetos.forEach(p => {
        container.innerHTML += `
            <a href="${p.link}" target="_blank" class="projeto-card">
                <article>
                    <h3>${p.nome}</h3>
                    <p>${p.descricao}</p>
                    <div class="tech-tags">
                        ${p.tecnologias.map(t => `<span>${t}</span>`).join('')}
                    </div>
                    <span class="link-indicador">Ver Repositório →</span>
                </article>
            </a>
        `;
    });
}

// renderiza as habilidades
function renderizarHabilidades() {
    const container = document.getElementById('lista-habilidades');
    habilidades.forEach(skill => {
        container.innerHTML += `<span class="skill-badge">${skill}</span>`;
    });
}

//inicializa tudo 
window.onload = () => {
    gerarSaudacao();
    renderizarProjetos();
    renderizarHabilidades();
    carregarFormacao();
};