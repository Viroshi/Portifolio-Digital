function hidePageLoader() {
    const loader = document.getElementById("page-loader");

    if (loader) {
        loader.classList.add("loader-hidden");
    }

    document.body.classList.remove("loading");
}

window.addEventListener("load", hidePageLoader);
setTimeout(hidePageLoader, 3000);

document.addEventListener("DOMContentLoaded", function () {
    initTypewriter();
    initCssArtToggle();
    initPromptCarousel();
    initGlitchClock();
    initNormalClock();
});

function initTypewriter() {
    const title = document.getElementById("typewriter-title");

    if (!title) return;

    const text = title.getAttribute("data-text") || title.textContent.trim();

    title.innerHTML =
        '<span class="text-wrapper"></span><span class="inline-block w-4 h-[1em] bg-secondary-fixed-dim align-middle ml-1 animate-cursor-pulse"></span>';

    const wrapper = title.querySelector(".text-wrapper");
    let index = 0;

    function type() {
        if (index >= text.length) return;

        wrapper.textContent += text.charAt(index);
        index++;

        setTimeout(type, 30 + Math.random() * 60);
    }

    setTimeout(type, 500);
}

function initCssArtToggle() {
    const button = document.getElementById("toggle-code-btn");
    const artView = document.getElementById("css-art-view");
    const codeView = document.getElementById("css-code-view");

    if (!button || !artView || !codeView) return;

    button.addEventListener("click", function () {
        const codeIsHidden = codeView.classList.contains("hidden");

        artView.classList.toggle("hidden", codeIsHidden);
        codeView.classList.toggle("hidden", !codeIsHidden);
        button.textContent = codeIsHidden ? "Ver Visual" : "Ver Código";
    });
}

function initPromptCarousel() {
    const image = document.getElementById("prompt-carousel-image");
    const imageLabel = document.getElementById("prompt-image-label");
    const progressLabel = document.getElementById("prompt-progress-label");
    const prevButton = document.getElementById("prompt-prev-btn");
    const nextButton = document.getElementById("prompt-next-btn");
    const historyList = document.getElementById("prompt-history-list");
    const finalCard = document.getElementById("prompt-final-card");
    const finalText = document.getElementById("prompt-final-text");
    const carouselFrame = document.querySelector(".prompt-carousel-frame");
    const dots = document.querySelectorAll(".prompt-dot");

    if (!image) return;

    const promptEvolutionData = [
        {
            tag: "T1",
            image: "assets/img/prompt-t1.jpeg",
            title: "Estrutura Base",
            prompt: "cidade operada por IA, futurista, arranha-céus modernos, ruas limpas, luz do dia plana.",
            comment: "Primeira formulação visual. A ideia central já aparece, mas ainda com pouca atmosfera, baixa dramaticidade e aparência genérica."
        },
        {
            tag: "T2",
            image: "assets/img/prompt-t2.jpeg",
            title: "Iluminação e Atmosfera",
            prompt: "cidade futurista controlada por IA, arquitetura imponente, noite, iluminação dramática, atmosfera densa, luzes de neon contrastantes.",
            comment: "A troca para o período noturno adiciona contraste, profundidade e uma leitura mais cyber-tecnológica da cidade controlada por IA."
        },
        {
            tag: "T3",
            image: "assets/img/prompt-t3.jpeg",
            title: "Referência Estética",
            prompt: "cidade cyberpunk governada por IA, arquitetura extremamente detalhada e massiva, arte no estilo de Syd Mead, luz volumétrica densa atravessando as estruturas, neblina rasteira.",
            comment: "A inclusão de referência artística e luz volumétrica aumenta a complexidade visual, aproximando a imagem de uma cena conceitual cinematográfica."
        },
        {
            tag: "T4",
            image: "assets/img/prompt-t4.jpeg",
            title: "Ordem Utopista",
            prompt: "cidade utópica perfeitamente ordenada por IA, geometria limpa e simétrica, caminhos de dados luminosos em tons de azul e dourado integrados ao asfalto, iluminação cinematográfica de pôr do sol.",
            comment: "O prompt abandona o caos cyberpunk e direciona a imagem para uma utopia organizada, limpa, simétrica e controlada por fluxos de dados."
        },
        {
            tag: "T5",
            image: "assets/img/prompt-t5.jpeg",
            title: "Fine Tuning Final",
            prompt: "Uma fotografia de 35mm de alta resolução de uma vasta cidade utópica meticulosamente organizada, inteiramente gerida por um sistema de IA. Arquitetura geométrica complexa construída com materiais cristalinos e brancos. Uma citadela central de IA com uma aura poderosa no horizonte. Vias luminosas de fluxo de dados e sistemas de transporte autônomos visíveis em primeiro plano. Banhada pela luz quente e dourada do golden hour, sombras longas, perspectiva profunda, composição magistral.",
            comment: "Versão final com especificação de lente, composição, materiais, escala, iluminação e profundidade. O prompt passa de uma ideia simples para uma direção visual completa."
        }
    ];

    let currentIndex = 0;

    function renderHistory(index) {
        if (!historyList) return;

        historyList.innerHTML = promptEvolutionData
            .slice(0, index + 1)
            .map((item, itemIndex) => `
                <div class="prompt-history-item ${itemIndex === index ? "active" : ""}">
                    <span class="prompt-history-version">${item.tag} - ${item.title}</span>
                    <div class="prompt-history-box">${item.prompt}</div>
                    <p class="prompt-history-comment">${item.comment}</p>
                </div>
            `)
            .join("");
    }

    function updateCarousel(index) {
        const item = promptEvolutionData[index];
        const isFinal = index === promptEvolutionData.length - 1;

        image.src = item.image;
        image.alt = item.prompt;

        if (imageLabel) {
            imageLabel.textContent = `${item.tag}_PROMPT_EVOLUTION.JPG`;
        }

        if (progressLabel) {
            progressLabel.textContent = `${index + 1} / ${promptEvolutionData.length}`;
        }

        if (prevButton) {
            prevButton.disabled = index === 0;
        }

        if (nextButton) {
            nextButton.disabled = isFinal;
        }

        if (finalCard && finalText) {
            finalCard.classList.toggle("prompt-final-active", isFinal);
            finalText.textContent = isFinal
                ? item.prompt
                : "Avance até a última imagem para revelar o prompt final.";
        }

        if (carouselFrame) {
            carouselFrame.classList.toggle("prompt-final-stage", isFinal);
        }

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle("active", dotIndex === index);
        });

        renderHistory(index);
    }

    function goToPrompt(index) {
        currentIndex = Math.max(0, Math.min(index, promptEvolutionData.length - 1));
        updateCarousel(currentIndex);
    }

    if (prevButton) {
        prevButton.addEventListener("click", function () {
            goToPrompt(currentIndex - 1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            goToPrompt(currentIndex + 1);
        });
    }

    dots.forEach((dot) => {
        dot.addEventListener("click", function () {
            goToPrompt(Number(dot.dataset.index));
        });
    });

    updateCarousel(currentIndex);
}

function initGlitchClock() {
    const clock = document.getElementById("relogio2");
    const status = document.getElementById("clock-status");

    if (!clock) return;

    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    let direcao = 1;
    let delayAtual = 400;

    function formatNumber(value) {
        return String(Math.abs(value)).padStart(2, "0");
    }

    function normalizeTime() {
        while (segundos >= 60) {
            segundos -= 60;
            minutos++;
        }

        while (segundos < 0) {
            segundos += 60;
            minutos--;
        }

        while (minutos >= 60) {
            minutos -= 60;
            horas++;
        }

        while (minutos < 0) {
            minutos += 60;
            horas--;
        }

        if (horas < 0) {
            horas = 23;
        }

        if (horas > 99) {
            horas = 0;
            minutos = 0;
            segundos = 0;
        }
    }

    function updateClockText() {
        const formattedTime = `${formatNumber(horas)}:${formatNumber(minutos)}:${formatNumber(segundos)}`;

        clock.textContent = formattedTime;
        clock.setAttribute("data-glitch", formattedTime);
    }

    function applyVisualEffect(type) {
        const glitchClasses = ["clock-glitch", "clock-critical", "clock-collapse"];

        clock.classList.remove(...glitchClasses);

        if (status) {
            status.classList.remove(...glitchClasses);
            status.textContent = type;
            status.setAttribute("data-glitch", type);
        }

        if (type !== "SYNC_NORMAL") {
            clock.classList.add("clock-glitch");
            status?.classList.add("clock-glitch");
        }

        if (["MINUTE_DESYNC", "HOUR_DESYNC", "REVERSE_FLOW"].includes(type)) {
            clock.classList.add("clock-critical");
            status?.classList.add("clock-critical");
        }

        if (type === "TEMPORAL_COLLAPSE") {
            clock.classList.add("clock-collapse");
            status?.classList.add("clock-collapse");
        }
    }

    function chooseGlitch() {
        const chance = Math.random();

        if (chance < 0.50) {
            segundos += direcao;
            delayAtual = 350 + Math.random() * 350;
            applyVisualEffect("SYNC_NORMAL");
            return;
        }

        if (chance < 0.66) {
            segundos += Math.floor(Math.random() * 8) + 2;
            delayAtual = 45 + Math.random() * 100;
            applyVisualEffect("FAST_FORWARD");
            return;
        }

        if (chance < 0.76) {
            delayAtual = 900 + Math.random() * 1200;
            applyVisualEffect("FRAME_FREEZE");
            return;
        }

        if (chance < 0.85) {
            segundos -= Math.floor(Math.random() * 4) + 1;
            delayAtual = 120 + Math.random() * 300;
            applyVisualEffect("REVERSE_FLOW");
            return;
        }

        if (chance < 0.92) {
            minutos += Math.floor(Math.random() * 3) + 1;
            delayAtual = 180 + Math.random() * 280;
            applyVisualEffect("MINUTE_DESYNC");
            return;
        }

        if (chance < 0.97) {
            horas += 1;
            delayAtual = 220 + Math.random() * 360;
            applyVisualEffect("HOUR_DESYNC");
            return;
        }

        horas = Math.floor(Math.random() * 24);
        minutos = Math.floor(Math.random() * 60);
        segundos = Math.floor(Math.random() * 60);
        direcao *= -1;
        delayAtual = 80 + Math.random() * 180;
        applyVisualEffect("TEMPORAL_COLLAPSE");
    }

    function runGlitchClock() {
        chooseGlitch();
        normalizeTime();
        updateClockText();

        setTimeout(runGlitchClock, delayAtual);
    }

    updateClockText();
    setTimeout(runGlitchClock, 500);
}

function initNormalClock() {
    const clock = document.getElementById("relogio1");

    if (!clock) return;

    function updateNormalClock() {
        const now = new Date();

        const h = String(now.getHours()).padStart(2, "0");
        const m = String(now.getMinutes()).padStart(2, "0");
        const s = String(now.getSeconds()).padStart(2, "0");

        clock.textContent = `${h}:${m}:${s}`;
    }

    updateNormalClock();
    setInterval(updateNormalClock, 1000);
}