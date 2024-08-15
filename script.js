const caixaPrincipal = document.querySelector('.caixa-principal');
    
    const caixaPerguntas = document.querySelector('.caixa-perguntas');
    
    const caixaAlternativas = document.querySelector('.caixa-alternativas');
    
    const caixaResultado = document.querySelector('.caixa-resultado');
    
    const textoResultado = document.querySelector('.texto-resultado');
    const perguntas = [
        {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegueresponder a todas as dúvidas que uma pessoa pode ter.Além disso, o chat também gera imagens e áudios
        hiper-realistas. Qual o seu primeiro pensamento?",
        alternativas: [
        "Isso é assustador!",
        "Isso é maravilhoso!"
        ]
        },
        
        {
        enunciado: "Pergunta 2",
        alternativas: [
        "Alternativa 1" ,
        "Alternativa 2"
        ]
        }
        ]
            let atual = 0;
            let perguntaAtual;
            function mostraPergunta() {
                perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
                perguntaAtual = perguntas[atual];
                caixaPerguntas.textContent =perguntaAtual.enunciado;
                mostraAlternativas();
                }
                mostraPergunta();
            function mostraAlternativas() {
                for (const alternativa of perguntaAtual.alternativas) {
                    const botaoAlternativas =
document.createElement("button");
                    botaoAlternativas.textContent = alternativa;
                    caixaAlternativas.appendChild(botaoAlternativas);

            }