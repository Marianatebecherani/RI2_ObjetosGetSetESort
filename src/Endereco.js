class Endereco {
    #estado
    #cidade
    #rua
    #numero

    constructor(estado, cidade, rua, numero) {
        this.#estado = estado
        this.#cidade = cidade
        this.#rua = rua
        this.#numero = numero
    }

    // Estado
    get estado() { return this.#estado; }
    set estado(novoEstado) { this.#estado = novoEstado; }
    estadoCaixaAlta() { return this.#estado.toUpperCase() } // Caixa Alta
    estadoCaixaBaixa() { return this.#estado.toLowerCase() } // Caixa Baixa

    // Cidade
    get cidade() { return this.#cidade; }
    set cidade(novaCidade) { this.#cidade = novaCidade; }
    cidadeCaixaAlta() { return this.#cidade.toUpperCase() }
    cidadeCaixaBaixa() { return this.#cidade.toLowerCase() }

    // Rua
    get rua() { return this.#rua; }
    set rua(novaRua) { this.#rua = novaRua; }
    ruaCaixaAlta() { return this.#rua.toUpperCase() }
    ruaCaixaBaixa() { return this.#rua.toLowerCase() }

    // Número (Não aplica caixa alta/baixa)
    get numero() { return this.#numero; }
    set numero(novoNumero) { this.#numero = novoNumero; }

    /**
     * Getter especial (Saída formatada)
     */
    get descricao() {
        return `
--------------------------
Endereço:
Rua: ${this.rua}
Número: ${this.numero}
Cidade: ${this.cidade}
Estado: ${this.estado}
--------------------------
        `.trim();
    }
}

export default Endereco