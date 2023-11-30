function adicionarLinha() {
    var tabela = document.getElementById("minhaTabela").getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow();
    
    var colunaNumeroLinha = novaLinha.insertCell(0);
    

    for (var i = 1; i <= 3; i++) {
        var coluna = novaLinha.insertCell(i);
        coluna.innerHTML = " ";
    }

    var colunaAcoes = novaLinha.insertCell(4);

colunaAcoes.innerHTML = '<button onclick="editarLinha(this)"><img src="editar.png" alt=""</button>' +
                        '<button onclick="removerLinha(this)"><img src="lixeira.png" alt=""></button>';
}

function editarLinha(botaoEditar) {
    var linha = botaoEditar.parentNode.parentNode;
    var colunas = linha.getElementsByTagName('td');

    botaoEditar.innerHTML = '<img src="salvar.png" alt="">';
    botaoEditar.onclick = function() {
        salvarEdicao(this);
    };

    for (var i = 0; i <= 3; i++) {
        var valorAtual = colunas[i].innerHTML;
        colunas[i].innerHTML = '<input type="text" value="' + valorAtual + '">';
    }
}

function salvarEdicao(botaoSalvar) {
    var linha = botaoSalvar.parentNode.parentNode;
    var colunas = linha.getElementsByTagName('td');

    for (var i = 0; i <= 3; i++) {
        colunas[i].innerHTML = colunas[i].querySelector('input').value;
    }

    botaoSalvar.innerHTML = '<img src="editar.png" alt="">';
    botaoSalvar.onclick = function() {
        editarLinha(this);
    };
}

function removerLinha(botaoRemover) {
    var linha = botaoRemover.parentNode.parentNode;
    linha.remove();
}