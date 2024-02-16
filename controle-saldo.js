var saldo = 0;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Saldo: ' + saldo);

function tipoEntrada() {
    readline.question('Qual operação deseja realizar? (1 - compra, 2 - venda): ', entrada => {
        entrada = parseInt(entrada);
        if (entrada === 1) {
            comprar();
        }
        else if (entrada === 2) {
            vender();
        }
        else {
            console.log('Operação inválida');
            tipoEntrada();
        }
    });
}

function comprar() {
    readline.question('Quantas peças deseja comprar? ', quantidadeCompra => {
        quantidadeCompra = parseInt(quantidadeCompra);
        if (quantidadeCompra < 0) {
            console.log('Quantidade inválida');
            comprar();
        }
        else {
            saldo += quantidadeCompra;
            console.log('Saldo: ' + saldo);
            desejaContinuar();
        }
    });
}

function vender() {
    readline.question('Quantas peças deseja vender? ', quantidadeVenda => {
        quantidadeVenda = parseInt(quantidadeVenda);
        if (quantidadeVenda < 0) {
            console.log('Quantidade inválida');
            vender();
        }
        else if (quantidadeVenda > saldo) {
            console.log('Saldo insuficiente');
            vender();
        }
        else {
            saldo -= quantidadeVenda;
            console.log('Saldo: ' + saldo);
            desejaContinuar();
        }
    });
}

function desejaContinuar() {
    readline.question('Deseja continuar? (s - sim, n - não) ', continuar => {
        if (continuar === 's') {
            tipoEntrada();
        }
        else if (continuar === 'n') {
            console.log('Sistema Encerrado');
            readline.close();
        }
        else {
            console.log('Opção inválida');
            desejaContinuar();
        }
    });
}

function main() {
    tipoEntrada();
}

main();
