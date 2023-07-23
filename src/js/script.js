function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
    const displayValue = document.getElementById('display').value;
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    } catch (error) {
    document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

window.onload = function() {
    var audio = document.querySelector('audio');
    var botaoMusica = document.getElementById('botao-musica');
    /*Esse onload é para garantir que o JavaScript seja executado
    assim que carregar a página.*/

    botaoMusica.onclick = function() {
        if (audio.paused) {
            audio.play();
            botaoMusica.classList.add('active');
        } else {
            audio.pause();
            botaoMusica.classList.remove('active');
        }
    };
};
/*Nessa parte, do botãoMusica, vai garantir que quando aperte o botão
a música funcione direitinho*/


//Para fazer o botão girar
const rotatingImage = document.getElementById('botao-musica');

rotatingImage.addEventListener('click', () => {
rotatingImage.classList.toggle('rotating');
});
