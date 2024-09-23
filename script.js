// Datos del usuario
const userData = {
    name: "",
    responses: []
};

let currentQuestion = 0;
let respuestabuena = 0;
let respuestamala = 0;

// Preguntas
const questions = [
    {
        idQuestions: 1,
        text: "¿Qué enfoque eliges para empezar el rediseño de los auriculares?",
        image: "img/1.jpeg",
        answers: [
            { idAnswers: 0, text: "Material adaptable para todas las partes del auricular, simplificando el diseño y manteniendo coherencia.", next: 1 },
            { idAnswers: 1, text: "Material adaptable a las necesidades del auricular, garantizando uniformidad en el rendimiento.", next: 2 }
        ]
    },
    {
        idQuestions: 2,
        text: "¿Qué valoras más en el diseño de los auriculares?",
        image: "img/2.jpeg",
        answers: [
            { idAnswers: 0, text: "Optar por un diseño que simplifique la producción y facilite el mantenimiento a largo plazo.", next: 3 },
            { idAnswers: 1, text: "Desarrollar un producto con múltiples acabados y características, adaptándose a diversos gustos y necesidades del usuario.", next: 4 }
        ]
    },
    {
        idQuestions: 3,
        text: "¿Cómo te gustaría mejorar el rendimiento acústico de los auriculares?",
        image: "img/3.jpeg",
        answers: [
            { idAnswers: 0, text: "Incorporar capas de materiales avanzados para asegurar una calidad de sonido superior, a pesar del mayor consumo de recursos.", next: 5 },
            { idAnswers: 1, text: "Crear un sistema de aislamiento sonoro optimizado con varios materiales especializados, a pesar del mayor impacto ambiental y complejidad en el reciclaje.", next: 6 }
        ]
    },
    {
        idQuestions: 4,
        text: "Para reducir costos de producción, ¿qué estrategia eliges?",
        image: "img/4.jpeg",
        answers: [
            { idAnswers: 0, text: "Seleccionar un solo material para todas las piezas del auricular, simplificando la cadena de suministro y el ensamblaje.", next: 7 },
            { idAnswers: 1,text: "Conservar materiales variados y buscar métodos más eficientes de ensamblaje para mejorar los tiempos de producción.", next: 8 }
        ]
    },
    {
        idQuestions: 5,
        text: "Al elegir los componentes de los auriculares, ¿cómo te gustaría abordar la selección de materiales?",
        image: "img/5.jpeg",
        answers: [
            { idAnswers: 0, text: "Utilizar un único material innovador, flexible y resistente, para optimizar la producción y reducir recursos sin sacrificar calidad.", next: 9 },
            { idAnswers: 1, text: "Escoger dos o tres materiales sostenibles que ofrezcan un balance entre comodidad, durabilidad y eficiencia en la producción, buscando minimizar el impacto ambiental a lo largo del ciclo de vida del producto.", next: 10}
        ]
    },
    {   idQuestions: 6,
        text: "Al final del ciclo de vida de los auriculares, ¿cómo propondrías gestionar los materiales usados?",
        image: "img/6.jpeg",
        answers: [
            { idAnswers: 0, text: "Establecer un sistema de desecho que recicle al menos el 30% de los componentes, aunque el proceso aumente emisiones y residuos a largo plazo.", next: 11 },
            { idAnswers: 1, text: "Focalizarse en extender la vida útil de los auriculares a través de reparaciones y sustituciones, a pesar de usar materiales no reciclables, aumentando la acumulación de residuos.", next: 12 }
        ]
    },
    {
        idQuestions: 7,
        text: "Al final del ciclo de vida de los auriculares, ¿cómo gestionarías los materiales de su fabricación, considerando el impacto ambiental del sistema de aislamiento sonoro avanzado?",
        image: "img/7.jpeg",
        answers: [
            { idAnswers: 0, text: "Implementar un programa de recuperación de auriculares para desechar responsablemente las piezas no reciclables.", next: 13 },
            { idAnswers: 1, text: "Crear auriculares con piezas intercambiables para reemplazar partes en lugar de desechar el producto completo.", next: 14 }
        ]
    }
];

// Definición de resultados
const results = [
    {
        text: "ERES UN DISEÑADOR UNIMATERIALISTA",
        image: "img/8.jpeg",
        descripcion: ["Gracias a tus decisiones enfocadas en un diseño unimaterialista, has logrado crear unos auriculares que no solo optimizan la producción, sino que también ofrecen una experiencia de usuario consistente y de alta calidad. Al optar por un solo material para todas las piezas, simplificaste el ensamblaje y redujiste los costos, garantizando que el producto sea fácil de fabricar, reparar y actualizar. SoundSphere Innovations ahora se posiciona como líder en innovación con un enfoque que combina sostenibilidad y funcionalidad sin comprometer el rendimiento. ¡Has alcanzado el equilibrio perfecto entre eficiencia y calidad!"]
    },
    {
        text: "ESTUVISTE MUY CERCA DE SER UN DISEÑADOR UNIMATERIALISTA",
        image: "img/9.jpeg",
        descripcion: ["Aunque optaste por hacer pequeños ajustes en el camino, buscando mejorar la experiencia del usuario y la calidad del sonido, tu enfoque siempre mantuvo una conciencia clara de la eficiencia y la simplicidad. Al elegir materiales complementarios y optimizar algunos procesos, te acercaste a un diseño coherente que equilibra rendimiento y facilidad de producción, aunque no completamente unificado. Has sido consciente de los impactos que conllevan estas decisiones y, aunque no abrazaste el unimaterialismo en su totalidad, entendiste su valor. Estás más cerca de una filosofía de diseño simplificada y responsable, y las decisiones que tomaste muestran un fuerte compromiso con mejorar en el futuro."]
    },
    {
        text: "ERES UN DISEÑADOR UNIMATERIALISTA",
        image: "img/10.jpeg",
        descripcion: ["Lograste optimizar el proceso de producción al reducir los recursos necesarios y simplificar la fabricación, lo que bajó los costos y aumentó la coherencia del producto. Además, el uso de un solo material facilitó el reciclaje y mejoró la sostenibilidad del diseño."]
    },
    {
        text: "ESTUVISTE MUY CERCA DE SER UN DISEÑADOR UNIMATERIALISTA",
        image: "img/11.jpeg",
        descripcion: ["Lograste crear un auricular que ofrece una excelente combinación de confort y durabilidad, con una propuesta sólida de sostenibilidad al utilizar materiales ecológicos. Los usuarios aprecian la versatilidad y la atención al impacto ambiental, lo que fortalece la reputación de la empresa. Sin embargo, al emplear múltiples materiales, los costos de producción y el proceso de reciclaje pueden ser más complejos, lo que aumenta la necesidad de gestión en la producción y podría afectar las ganancias a largo plazo."]
    },
    {
        text: "ESTUVISTE MUY CERCA DE DESTRUIR EL MUNDO, AÚN ESTÁS A TIEMPO DE CAMBIAR TUS DECISIONES",
        image: "img/12.jpeg",
        descripcion: ["Tus decisiones mejoraron el rendimiento de los auriculares, pero el alto consumo de recursos y la mala gestión de materiales casi destruyeron el mundo. Aún puedes corregirlo adoptando prácticas más sostenibles y equilibrando innovación con responsabilidad ambiental."]
    },
    {
        text: "TUS DECISIONES DESTRUYERON EL MUNDO",
        image: "img/13.jpeg",
        descripcion: ["El rediseño de los auriculares mejoró el rendimiento y la calidad acústica con materiales avanzados, pero centrarse en extender su vida útil sin considerar el reciclaje causó una gran acumulación de residuos. Tus decisiones, aunque bien intencionadas, aumentaron el consumo de recursos y contribuyeron al colapso ambiental."]
    },
    {
        text: "ESTUVISTE MUY CERCA DE DESTRUIR EL MUNDO, AÚN ESTÁS A TIEMPO DE CAMBIAR TUS DECISIONES",
        image: "img/14.jpeg",
        descripcion: ["Las mejoras acústicas de los auriculares incrementaron el impacto ambiental por el uso de materiales difíciles de reciclar. A pesar de intentar gestionar los residuos, tus decisiones casi destruyeron el mundo. Aún puedes elegir soluciones más sostenibles."]
    },
    {
        text: "TUS DECISIONES DESTRUYERON EL MUNDO",
        image: "img/15.jpeg",
        descripcion: ["Mejorar la calidad de los auriculares a través de materiales avanzados y aislamiento sonoro tuvo un alto costo ambiental. La mala gestión de residuos y el impacto olvidado de tus decisiones llevaron a que destruyeras el mundo."]
    }
];

// Iniciar juego
function startGame() {
    const name = document.getElementById('user-name').value;
    if (name.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }
    userData.name = name;
    document.getElementById('name-section').style.display = 'none';
    document.getElementById('game-section').style.display = 'block';
    loadQuestion(0);
}

// Cargar pregunta
function loadQuestion(index) {
    if (index >= questions.length || index < 0) {
        endGame();
        return;
    }

    const question = questions[index];

    document.getElementById('question-text').innerText = question.text;
    document.getElementById('question-image').src = question.image;
    document.getElementById('answer-1').innerText = question.answers[0].text;
    document.getElementById('answer-2').innerText = question.answers[1].text;

    // Desmarca opciones previas
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        selectedAnswer.checked = false;
    }

    // Limpia justificación anterior
    document.getElementById('justification').value = '';
}

// Pasar a la siguiente pregunta
function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const justification = document.getElementById('justification').value;

    if (!selectedAnswer || justification === "") {
        alert("Por favor, selecciona una respuesta y justifica tu elección.");
        return;
    }

    const answerIndex = selectedAnswer.value;
    userData.responses.push({
        idQuestions: questions[currentQuestion].idQuestions,
        question: questions[currentQuestion].text,
        idAnswer: questions[currentQuestion].answers[answerIndex].idAnswers,
        justification: justification,
        text: questions[currentQuestion].answers[answerIndex].text,
    });

    // Obtener el índice de la siguiente pregunta
    const nextQuestionIndex = questions[currentQuestion].answers[answerIndex].next;
    if (nextQuestionIndex !== undefined) {
        currentQuestion = nextQuestionIndex;
        loadQuestion(currentQuestion);
    } else {
        endGame();
    }
}

// Finalizar juego
function endGame() {
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';

    // Determinar el resultado basado en las respuestas
    let resultIndex;
    const array = []

    function arraysAreEqual(arr1, arr2) {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    }

    for (let i = 0; i < userData.responses.length; i++) {
        array.push(userData.responses[i]?.idAnswer)
    }

    if (arraysAreEqual(array ,[0, 0, 0])) {
        resultIndex = 0
    }

    if (arraysAreEqual(array ,[0, 0, 1])) {
        resultIndex = 1
    }

    if (arraysAreEqual(array ,[0, 1, 0])) {
        resultIndex = 2
    }

    if (arraysAreEqual(array ,[0, 1, 1])) {
        resultIndex = 3
    }

    if (arraysAreEqual(array ,[1, 0, 0])) {
        resultIndex = 4
    }

    if (arraysAreEqual(array ,[1, 0, 1])) {
        resultIndex = 5
    }

    if (arraysAreEqual(array ,[1, 1, 0])) {
        resultIndex = 6
    }

    if (arraysAreEqual(array ,[1, 1, 1])) {
        resultIndex = 7
    }

    const result = results[resultIndex];
    document.getElementById('result-title').innerText = result.text;
    document.getElementById('result-message').innerText = result.descripcion.join(' ');
    document.getElementById('result-image').src = result.image;

    // Generar y descargar archivo Excel automáticamente
    const worksheetData = [
        ["Nombre", userData.name],
        ...userData.responses.map((resp, index) => [
            `Pregunta ${index + 1}`, resp.question, `Respuesta: ${resp.answer}`, `Justificación: ${resp.justification}`
        ])
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Resultados");
    XLSX.writeFile(workbook, "resultados.xlsx");
}

// Reiniciar Juego
function restartGame() {
    location.reload();
}
