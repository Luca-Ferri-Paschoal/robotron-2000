const estatisticas = document.querySelectorAll('[data-estatistica]');
const valorAtributos = {
    forca: 0,
    poder: 0,
    energia: 0,
    velocidade: 0,
}
const atributos = ['forca', 'poder', 'energia', 'velocidade'];

exibeEstatisticas();

const botoes = document.querySelectorAll('[data-controler]');
const valorPecas = {
    bracos: {
        forca: 29,
        poder: 35,
        energia: -21,
        velocidade: -5
    },

    blindagem: {
        forca: 41,
        poder: 20,
        energia: 0,
        velocidade: -20
    },

    nucleos: {
        forca: 0,
        poder: 7,
        energia: 48,
        velocidade: -24
    },

    pernas: {
        forca: 27,
        poder: 21,
        energia: -32,
        velocidade: 42
    },

    foguetes: {
        forca: 0,
        poder: 28,
        energia: 0,
        velocidade: -2
    }
}

function somaOuSubtrai(operacao, contador) {
    operacao === 'somar' ? contador.value++
        : contador.value--
    ;
}

function encontraContador(botao) {
    return botao.parentNode.querySelector('[data-contador]');
}

botoes.forEach(botao => {
    const operacao = botao.dataset.controler;
    const peca = botao.dataset.peca;
    const contador = encontraContador(botao);

    botao.addEventListener(
        'click',
        () => {
            somaOuSubtrai(operacao, contador);
            atualizaEstatisticas(peca);
        }
    );
});

function atualizaEstatisticas(peca) {
    const valores = valorPecas[peca];

    atributos.forEach(atributo => {
        valorAtributos[atributo] += valores[atributo];
    });

    exibeEstatisticas();
}

function exibeEstatisticas() {
    estatisticas.forEach((elemento, index) => {
        elemento.textContent = valorAtributos[atributos[index]];
    });
}
