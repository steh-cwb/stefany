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
            texto: "Isso é assustador!",
            afirmação: [ "No início, ficou com medo do que essa tecnologia pode fazer.",
            " Achou assustador pensar na velocidade com que a tecnologia está avançando."
            ]
            },
            {
            texto: "Isso é maravilhoso",
            afirmação: [
                "Quis saber como usar IA no seu dia a dia.",
            "Pensou que IA pode ajudar em tarefas da sua vida."
            ]
            },
            ]
     },
     {
        enunciado: "Insira o enunciado da Pergunta 2",
        alternativas: [
        {
        texto: "Alternativa 1",
        afirmação: "Afirmação da alternativa 1"
        },
        {
        texto: "Alternativa 2",
        afirmação: "Afirmação da alternativa 2"
        }
        ]
},
{
        enunciado: "Insira o enunciado da Pergunta 3",
        alternativas: [
        {
        texto: "Alternativa 1",
        afirmação: "Afirmação da alternativa 1"
        },
        {
        texto: "Alternativa 2",
        afirmação: "Afirmação da alternativa 2"
        }
        ]
        }
    ]
       
            let atual = 0;
            let historiaFinal = "";
            let perguntaAtual;
            
            function mostraPergunta() {
                if (atual >= perguntas.length) {
                    mostraResultado();
                    return;
                    }
                
                perguntaAtual = perguntas[atual];
                caixaPerguntas.textContent = perguntaAtual.enunciado;
                caixaAlternativas.textContent = "";
                mostraAlternativas();
                }
            
            function mostraAlternativas() {
                for (const alternativa of perguntaAtual.alternativas) {
                    const botaoAlternativas = document.createElement("button");
                    botaoAlternativas.textContent = alternativa.texto;
                botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
                caixaAlternativas.appendChild(botaoAlternativas);
            
            function respostaSelecionada(opcaoSelecionada) {
                        const afirmacoes = opcaoSelecionada.afirmação;
                        historiaFinal += afirmacoes + " ";
                        atual++;
                        mostraPergunta();
                    };
            }
        }
        function aleatorio (lista){
            const posicao = Math.floor(Math.random()* lista.length);
            return lista[posicao];
        }
        function mostraResultado() {
            caixaPerguntas.textContent = "Em 2049...";
            textoResultado.textContent = historiaFinal;
            caixaAlternativas.textContent = "";
            }
            mostraPergunta();
          