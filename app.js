let numeroSecreto = gerarumeroAleatorio();

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;  
}
exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'escolha um número entre 1 e 10');



function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);   
}
