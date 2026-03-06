import TelefoneCelular from "./TelefoneCelular.js";
import Endereco from "./Endereco.js";

class Cliente {
    #nome
    #telefoneCelular
    #email
    #endereco

    constructor(nome, telefoneCelular, email, endereco) {
        this.#nome = nome;
        this.#telefoneCelular = telefoneCelular; // Objeto TelefoneCelular
        this.#email = email;
        this.#endereco = endereco; // Objeto Endereco
    }

    // Nome
    get nome() { return this.#nome; }
    set nome(novoNome) { this.#nome = novoNome; }
    nomeCaixaAlta() { return this.#nome.toUpperCase(); }
    nomeCaixaBaixa() { return this.#nome.toLowerCase(); }

    // Telefone (Retorna o objeto TelefoneCelular)
    get telefone() { return this.#telefoneCelular; }
    set telefone(novoTelefone) { this.#telefoneCelular = novoTelefone; }

    // Email
    get email() { return this.#email; }
    set email(novoEmail) { this.#email = novoEmail; }
    emailCaixaAlta() { return this.#email.toUpperCase(); }
    emailCaixaBaixa() { return this.#email.toLowerCase(); }

    // Endereco (Retorna o objeto Endereco)
    get endereco() { return this.#endereco; }
    set endereco(novoEndereco) { this.#endereco = novoEndereco; }


    /**
     * Getter de Acesso Especial (Saída formatada).
     * Chama os getters 'descricao' dos objetos aninhados.
     */
    get descricao() {
        return `
Informações do Cliente:
${this.nome}
Email: ${this.email}
${this.telefone.descricao}
${this.endereco.descricao}
        `.trim();
    }
}

export default Cliente