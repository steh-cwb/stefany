const caixaPrincipal = document.querySelector('.caixa-principal');
    
    const caixaPerguntas = document.querySelector('.caixa-perguntas');
    
    const caixaAlternativas = document.querySelector('.caixa-alternativas');
    
    const caixaResultado = document.querySelector('.caixa-resultado');
    
    const textoResultado = document.querySelector('.texto-resultado');
    const perguntas = [
        {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegueresponder a todas as dúvidas que uma pessoa pode ter.Além disso, o chat também gera imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
        alternativas: [
            {
            texto: "Alternativa 1",
            afirmação: "Isso é assustador!",
            },
            {
            texto: "Alternativa 2",
            afirmação: "Isso é maravilhoso!"
            }
            ]
     },
    ];
       
            let atual = 0;
            let historiaFinal = "";
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
                    const botaoAlternativas =document. createElement("button");
                    botaoAlternativas.textContent = alternativa;
                    caixaAlternativas.appendChild(botaoAlternativas);

document.createElement("button");
                    botaoAlternativas.textContent = alternativa.texto;
                    caixaAlternativas.appendChild(botaoAlternativas);
                    botaoAlternativas.addEventListener("click", function )
                        function respostaSelecionada(opcaoSelecionada) {
                            const afirmacoes = opcaoSelecionada.afirmação;
                            historiaFinal = afirmacoes;
                        atual++;
                        mostraPergunta();


                    };
                    caixaAlternativas.appendChild(botaoAlternativas);
                    
                    
            }
        }