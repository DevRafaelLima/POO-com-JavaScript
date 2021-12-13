class ContaBancaria {

    constructor(agencia, numero, tipo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }
    get saldo(){
        return this._saldo
    }
    set saldo(valor){
        this._saldo += valor
    }

    sacar(valor){
        if(valor > this._saldo){
            return "valor do saque supera o valor em conta. "
        }
        this._saldo -= valor
        return this._saldo
    }
    depositar(valor){
        this._saldo += valor
        return this._saldo
    }
}


class contaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero)
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito

    }
    get cartaoCredito(){
    return this._cartaoCredito
    }
    set cartaoCredito(cartao){
        this.cartaoCredito = cartao
    }
}

class contaPoupaca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = "poupança"
    }
}
class contaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = "universitária"
    }

    sacar(valor){
        if(valor > 500){
            return 'operação inválida'
        }

        this._saldo -= valor
        return this._saldo
    }
}