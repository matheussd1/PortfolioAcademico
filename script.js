
const dadosPessoais = {
    nome: "Matheus Dias",
    cargo: "Desenvolvedor Full-Stack",
    bio: "Desenvolvedor junior",
    github: "https://github.com/matheussd1",
    linkedin: "https://www.linkedin.com/in/matheusrpdias/"
};

const projetos = [
    {
        nome: "API com DM Card",
        descricao: "API robusta para consulta de indicadores financeiros e KPIs estaduais com banco de dados SQLite.",
        tecnologias: ["Node.js", "Express", "SQLite"],
        link: "https://github.com/TeamMinerva/DM-API"
    },
    {
        nome: "Apollo11",
        descricao: "Sistema focado em monitoramento e gestão de atestados médicos e equipes ageis, utilizando Python e Flask para garantir robustez e escalabilidade no backend.",
        tecnologias: ["Python", "Flask"],
        link: "https://github.com/matheussd1/Apollo11"
    },
    {
        nome: "Aerocode",
        descricao: "Sistema CLI desenvolvido em TypeScript para gestão de produção e manutenção de aeronaves.",
        tecnologias: ["Node.js", "TypeScript"],
        link: "https://github.com/matheussd1/Aerocode"
    },
    {
        nome: "Bivago",
        descricao: "Plataforma de busca e reserva, explorando integração de dados e uma interface de usuário intuitiva e responsiva.",
        tecnologias: ["JavaScript", "HTML/CSS"],
        link: "https://github.com/matheussd1/Bivago"
    }
];

const hardSkills = ["Python", "TypeScript", "HTML5", "CSS3", "Java", "JavaScript", "Node.js", "Express", "SQL", "Git", "GitHub"];
const softSkills = ["Comunicação", "Organização", "Trabalho em Equipe", "Resolução de Problemas"];


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

const cursosComplementares = [
    {
        nome: "IT Essentials - CISCO",
        descricao: "Base de TI e habilidades práticas em hardware, software, rede e segurança.",
        periodo: "Mar 2025 - Jul 2025",
        cargaHoraria: "70h"
    }
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
        mensagem = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        mensagem = "Boa tarde!";
    } else {
        mensagem = "Boa noite!";
    }

    saudacaoElement.innerText = `${mensagem} Meu nome é`;
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
    const containerHard = document.getElementById('lista-habilidades');
    const containerSoft = document.getElementById('lista-soft-skills');
    
    containerHard.innerHTML = "";
    containerSoft.innerHTML = "";


    hardSkills.forEach(skill => {
        containerHard.innerHTML += `<span class="skill-badge hard">${skill}</span>`;
    });

    
    softSkills.forEach(skill => {
        containerSoft.innerHTML += `<span class="skill-badge soft">${skill}</span>`;
    });
}


function copiarEmail() {
    const email = "matheusrpd.dev@gmail.com";
    const feedback = document.getElementById('feedback-copia');

    // Copia para a área de transferência
    navigator.clipboard.writeText(email).then(() => {

        if (feedback) {
            feedback.classList.add('visivel');
            
            setTimeout(() => {
                feedback.classList.remove('visivel');
            }, 2000);
        }
    });
}

function carregarCursos() {
    const container = document.getElementById('lista-cursos');
    container.innerHTML = "";

    // Repetição para renderizar os cursos
    cursosComplementares.forEach(curso => {
        container.innerHTML += `
            <div class="curso-item">
                <div class="curso-header">
                    <h3>${curso.nome}</h3>
                    <span class="badge-carga">${curso.cargaHoraria}</span>
                </div>
                <p class="curso-desc">${curso.descricao}</p>
                <p class="curso-periodo">${curso.periodo}</p>
            </div>
        `;
    });
}

//inicializa tudo 
window.onload = () => {
    gerarSaudacao();
    renderizarProjetos();
    renderizarHabilidades();
    carregarFormacao();
    copiarEmail();
    carregarCursos();
};