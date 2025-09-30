let pu, qtd, total, desc, semDesc;
const prompt = require('prompt-sync')();

function calcularTotal() {
    semDesc = pu * qtd;
    return semDesc;
}

function aplicarDesconto() {
    if (semDesc >= 100) {
        desc = 0.1 * semDesc
        total = semDesc * 0.9;
        return `Você possui um desconto de R$ ${desc.toFixed(2)}. Você pagará pela sua compra apenas ${total.toFixed(2)}.`
    } else {
        total = semDesc;
        return 'Você não tem nenhum desconto hoje.'
    }
}

function exibirResumo() {
    return `Valor sem desconto: R$ ${semDesc.toFixed(2)}\nValor com desconto: ${total.toFixed(2)}.`
}

pu = Number(prompt('Insira o preço unitário do produto: '));
qtd = Number(prompt('Agora insira a quantidade comprada: '));
console.log(`Sua compra deu um valor de R$ ${calcularTotal()}. ${aplicarDesconto()}`);
console.log(exibirResumo());