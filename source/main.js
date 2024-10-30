const form = document.getElementById('form-client');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
});

function adicionaLinha() {
    const inputNameClient = document.getElementById('nome-cliente');
    const inputNumberClient = document.getElementById('numero-cliente');

    let linha = '<tr>';
    linha += `<td>${inputNameClient.value}</td>`;
    linha += `<td>${inputNumberClient.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNameClient.value = '';
    inputNumberClient.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
