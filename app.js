alert('Bem vindo ao jogo secreto!');
let numeroMaximo = 800;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 0;

while(chute != numeroSecreto) {

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    tentativas++

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    if (numeroSecreto == chute) {
        alert(`Isso ai! O número secreto é ${numeroSecreto}, vc acertou usando ${tentativas} ${palavraTentativa}.`);
    } else {
        if (numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }
}


