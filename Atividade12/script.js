const janela = document.getElementById("janela");
const texto = document.getElementById("idJanela");

function Abrir(){
    janela.src = "./img/janelaaberta.png";
    texto.innerHTML = "Janela está aberta.";
}

function Quebrar(){
    janela.src = "./img/janelaquebrada.png";
    texto.innerHTML = "Tu quebrou a janela!!";
}

function Fechar(){
    janela.src = "./img/janelafechada.png";
    texto.innerHTML = "Abra a janela!";
}