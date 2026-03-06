const quizData = [
    {
        question: "¿Con qué frecuencia utilizas herramientas generativas de IA (como ChatGPT, Claude o similares)?",
        options: [
            { text: "Nunca o casi nunca, prefiero métodos tradicionales.", score: 0 },
            { text: "Un par de veces al mes, por curiosidad o para cosas puntuales.", score: 1 },
            { text: "Semanalmente, para que me ayuden con borradores y correcciones.", score: 2 },
            { text: "A diario, están integradas en mi flujo de trabajo como asistentes imprescindibles.", score: 3 }
        ]
    },
    {
        question: "Cuando buscas información muy específica o técnica, ¿cuál es tu primer paso?",
        options: [
            { text: "Hacer una búsqueda tradicional en Google y abrir múltiples enlaces.", score: 0 },
            { text: "Preguntar a un experto humano o buscar en un foro.", score: 1 },
            { text: "Preguntar a una IA, pero me frustra si a veces 'alucina' la respuesta.", score: 2 },
            { text: "Consultar a una IA especializada o GPT de nicho con un prompt bien estructurado.", score: 3 }
        ]
    },
    {
        question: "¿Cómo sueles formular tus 'prompts' o instrucciones a la IA?",
        options: [
            { text: "No suelo usar prompts. / Escribo una frase corta y simple.", score: 0 },
            { text: "Le hablo como si fuera un humano, de manera coloquial.", score: 1 },
            { text: "Le doy algo de contexto y le pido que actúe como un experto antes de pedirle la tarea.", score: 2 },
            { text: "Utilizo estructuras complejas: rol, contexto explícito, formato de salida deseado y límites.", score: 3 }
        ]
    },
    {
        question: "¿Confías ciegamente en lo que la Inteligencia Artificial te responde?",
        options: [
            { text: "No, creo que se equivocan demasiado. Por eso no las uso.", score: 0 },
            { text: "Sí, asumo que como son máquinas súper inteligentes, la respuesta es correcta.", score: 1 },
            { text: "Miro por encima y si suena lógico, lo doy por válido.", score: 2 },
            { text: "Nunca. Entiendo que calculan probabilidades, así que siempre verifico fuentes críticas (Human-in-the-loop).", score: 3 }
        ]
    },
    {
        question: "¿Cuál crees que es el mayor impacto de la IA en tu sector profesional en los próximos 2 años?",
        options: [
            { text: "No creo que afecte en absoluto a mi día a día.", score: 0 },
            { text: "Automatizará parte de las tareas aburridas, pero no cambiará nada esencial.", score: 1 },
            { text: "Cambiará la forma en que estructuramos el trabajo, requiriendo adaptarnos.", score: 2 },
            { text: "Transformará fundamentalmente los flujos de valor; aquellos que no la integren quedarán obsoletos.", score: 3 }
        ]
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;

function startQuiz() {
    document.getElementById('slide-welcome').classList.remove('active');
    document.getElementById('quiz-progress').style.display = 'flex';
    renderQuestion();
}

function renderQuestion() {
    const qArea = document.getElementById('questions-area');
    qArea.innerHTML = '';
    
    if (currentQuestionIndex >= quizData.length) {
        showResult();
        return;
    }

    const q = quizData[currentQuestionIndex];
    
    // Update progress
    document.getElementById('q-current').innerText = currentQuestionIndex + 1;
    const progressPercent = ((currentQuestionIndex) / quizData.length) * 100;
    document.getElementById('progress-bar').style.width = progressPercent + '%';

    // Build DOM
    const slide = document.createElement('div');
    slide.className = 'quiz-slide active';
    
    const title = document.createElement('h3');
    title.className = 'question-title';
    title.innerText = q.question;
    slide.appendChild(title);

    const optionsGrid = document.createElement('div');
    optionsGrid.className = 'options-grid';

    q.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => selectOption(opt.score, btn);
        optionsGrid.appendChild(btn);
    });

    slide.appendChild(optionsGrid);
    qArea.appendChild(slide);
}

function selectOption(score, btnElement) {
    // Disable all buttons to prevent double click
    const buttons = btnElement.parentElement.querySelectorAll('.option-btn');
    buttons.forEach(b => b.style.pointerEvents = 'none');
    
    btnElement.classList.add('selected');
    totalScore += score;
    
    setTimeout(() => {
        currentQuestionIndex++;
        renderQuestion();
    }, 600);
}

function showResult() {
    document.getElementById('quiz-progress').style.display = 'none';
    const resSlide = document.getElementById('slide-result');
    resSlide.style.display = 'block';

    const levelTitle = document.getElementById('res-level');
    const desc = document.getElementById('res-desc');
    const icon = document.getElementById('res-icon');

    // 15 max points (5 questions * 3 pts)
    if (totalScore <= 3) {
        levelTitle.innerText = "Explorador Inicial";
        levelTitle.style.color = "#94a3b8"; // gris
        desc.innerText = "La Inteligencia Artificial aún te parece un terreno lejano o prescindible. Estás en la etapa perfecta para empezar a experimentar de a poco y descubrir todo el potencial que te estás perdiendo.";
        icon.innerHTML = '<i class="fa-solid fa-compass"></i>';
    } else if (totalScore <= 7) {
        levelTitle.innerText = "Conocedor Curioso";
        levelTitle.style.color = "#00d2ff"; // azul
        desc.innerText = "Conoces la teoría y le ves el atractivo, pero aún no has logrado integrarla profundamente en tus sistemas. Tu uso es esporádico. El siguiente paso es enfocarte en prompts técnicos.";
        icon.innerHTML = '<i class="fa-solid fa-eye"></i>';
    } else if (totalScore <= 11) {
        levelTitle.innerText = "Entendido en IA";
        levelTitle.style.color = "#00ff88"; // verde neon
        desc.innerText = "¡Muy bien! Utilizas la IA como un músculo extra en tu día a día. Comprendes cómo darle instrucciones claras y sabes que es una herramienta de aumento cognitivo. Tu simbiosis ya es altamente rentable.";
        icon.innerHTML = '<i class="fa-solid fa-microchip"></i>';
    } else {
        levelTitle.innerText = "Experto Arquitecto IA";
        levelTitle.style.color = "#ff00d4"; // magenta
        desc.innerText = "Eres la vanguardia digital. No solo usas la IA; la orquestas. Comprendes sus limitaciones, validas sus sesgos y diseñas matrices de contexto perfectas (como las que usamos en Dunajhon GPT Connect IA).";
        icon.innerHTML = '<i class="fa-solid fa-crown"></i>';
    }
}
