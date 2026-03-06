class TelefoneCelular {
    #ddd
    #numero

    constructor(ddd, numero) {
        this.#ddd = ddd
        this.#numero = numero
    }

    // DDD
    get ddd() { return this.#ddd }
    set ddd(novoDdd) { this.#ddd = novoDdd }

    // Número
    get numero() { return this.#numero; }
    set numero(novoNumero) { this.#numero = novoNumero; }

    /**
     * Getter especial (Saída formatada)
     */
    get descricao() {
        return `
--------------------------
Telefone:
DDD: ${this.ddd}
Número: ${this.numero}
--------------------------
        `.trim()
    }
}

export default TelefoneCelular;