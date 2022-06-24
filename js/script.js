function alterarCss() {
    var estilo = document.getElementById('body');
    var corTexto = document.getElementById('cor-texto').value;
    var corFundo = document.getElementById('cor-fundo').value;
    var tamanhoTexto = document.getElementById('tamanho-texto').value;


    estilo.style = 'color: ' + corTexto +'; background-color: ' + corFundo +'; font-size: ' + tamanhoTexto + 'px;';
}

