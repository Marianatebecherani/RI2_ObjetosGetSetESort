/**
 * RI 2 - Construção de Objetos, Encapsulamento (Get/Set) e Ordenação
 * * Objetivos:
 * 1. Desenvolver Funções Construtoras para Cliente, TelefoneCelular e Endereco. 
 * 2. Incluir métodos de acesso (Getters/Setters) para cada atributo. 
 * 3. Incluir métodos para retornar o valor de strings em caixa alta/baixa. 
 * 4. Criar um método 'descricao' (Get) com saída formatada para Cliente. 
 * 5. Criar uma função para ordenar um Array de clientes por nome. 
 */

// --- 1. Definição das Classes com Encapsulamento Nativo ---

class Endereco {
    // Usamos '_' para indicar que essas propriedades são privadas.
    constructor(estado, cidade, rua, numero) {
        this._estado = estado;
        this._cidade = cidade;
        this._rua = rua;
        this._numero = numero;
    }

    // --- Getters e Setters Nativos (Acesso aos Atributos) ---

    // Estado
    get estado() { return this._estado; }
    set estado(novoEstado) { this._estado = novoEstado; }
    estadoCaixaAlta() { return this._estado.toUpperCase(); } // Caixa Alta
    estadoCaixaBaixa() { return this._estado.toLowerCase(); } // Caixa Baixa

    // Cidade
    get cidade() { return this._cidade; }
    set cidade(novaCidade) { this._cidade = novaCidade; }
    cidadeCaixaAlta() { return this._cidade.toUpperCase(); }
    cidadeCaixaBaixa() { return this._cidade.toLowerCase(); }

    // Rua
    get rua() { return this._rua; }
    set rua(novaRua) { this._rua = novaRua; }
    ruaCaixaAlta() { return this._rua.toUpperCase(); }
    ruaCaixaBaixa() { return this._rua.toLowerCase(); }

    // Número (Não aplica caixa alta/baixa)
    get numero() { return this._numero; }
    set numero(novoNumero) { this._numero = novoNumero; }

    /**
     * Getter especial (Saída formatada)
     */
    get descricao() {
        return `
Endereço:
Rua: ${this.rua}
Número: ${this.numero}
Cidade: ${this.cidade}
Estado: ${this.estado}
        `.trim();
    }
}

class TelefoneCelular {
    constructor(ddd, numero) {
        this._ddd = ddd;
        this._numero = numero;
    }

    // --- Getters e Setters Nativos (Acesso aos Atributos) ---

    // DDD
    get ddd() { return this._ddd; }
    set ddd(novoDdd) { this._ddd = novoDdd; }
    dddCaixaAlta() { return this._ddd.toUpperCase(); }
    dddCaixaBaixa() { return this._ddd.toLowerCase(); }

    // Número
    get numero() { return this._numero; }
    set numero(novoNumero) { this._numero = novoNumero; }
    numeroCaixaAlta() { return this._numero.toUpperCase(); }
    numeroCaixaBaixa() { return this._numero.toLowerCase(); }

    /**
     * Getter especial (Saída formatada)
     */
    get descricao() {
        return `
Telefone:
DDD: ${this.ddd}
Número: ${this.numero}
        `.trim();
    }
}


class Cliente {
    constructor(nome, telefoneCelular, email, endereco) {
        this._nome = nome;
        this._telefoneCelular = telefoneCelular; // Objeto TelefoneCelular
        this._email = email;
        this._endereco = endereco; // Objeto Endereco
    }

    // --- Getters e Setters Nativos (Acesso aos Atributos) ---

    // Nome
    get nome() { return this._nome; }
    set nome(novoNome) { this._nome = novoNome; }
    nomeCaixaAlta() { return this._nome.toUpperCase(); }
    nomeCaixaBaixa() { return this._nome.toLowerCase(); }

    // Telefone (Retorna o objeto TelefoneCelular)
    get telefone() { return this._telefoneCelular; }
    set telefone(novoTelefone) { this._telefoneCelular = novoTelefone; }

    // Email
    get email() { return this._email; }
    set email(novoEmail) { this._email = novoEmail; }
    emailCaixaAlta() { return this._email.toUpperCase(); }
    emailCaixaBaixa() { return this._email.toLowerCase(); }

    // Endereco (Retorna o objeto Endereco)
    get endereco() { return this._endereco; }
    set endereco(novoEndereco) { this._endereco = novoEndereco; }


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


// --- 2. Lógica de Ordenação (Objetivos, Parte 2) ---

/**
 * Função que recebe um Array de clientes e o devolve ordenado alfabeticamente pelo nome.
 * Usa o getter 'nome' da classe Cliente.
 * @param {Cliente[]} arrayClientes - Array de objetos Cliente.
 * @returns {Cliente[]} - Novo Array de clientes ordenado.
 */
function ordenarClientesPorNome(arrayClientes) {
    const clientesOrdenados = [...arrayClientes]; 
    clientesOrdenados.sort((a, b) => {
        // Acessa o atributo nome via o getter nativo (a.nome)
        const nomeA = a.nome.toUpperCase();
        const nomeB = b.nome.toUpperCase();

        if (nomeA < nomeB) {
            return -1;
        }
        if (nomeA > nomeB) {
            return 1;
        }
        return 0;
    });
    return clientesOrdenados;
}

// --- 3. Testes e Saída ---

// Criação dos objetos (mantendo os nomes de variáveis do exemplo da atividade)
const telefone = new TelefoneCelular('11', '999999999');
const endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
const cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco);

console.log("--- 1. Saída Formatada (Cliente Exemplo) ---");
console.log(cliente.descricao); // Teste do Getter 'descricao'

console.log("\n--- 2. Teste de Métodos Caixa Alta/Baixa e Get/Set Nativos ---");
console.log(`Nome Original (via getter): ${cliente.nome}`); // Acesso direto ao getter
console.log(`Nome em CAIXA ALTA: ${cliente.nomeCaixaAlta()}`);
console.log(`Email em caixa baixa: ${cliente.emailCaixaBaixa()}`);

// Teste Setter: Mudança de Nome via sintaxe nativa
cliente.nome = "Pedro Alvares Cabral"; 
console.log(`Nome após SET nativo: ${cliente.nome}`);
cliente.nome = "Carlos Conrado Heinz"; // Volta ao original


// --- 3. Teste de Ordenação ---
const cliente2 = new Cliente('Alice Souza', new TelefoneCelular('21', '888888888'), 'alice@app.com', new Endereco('RJ', 'Rio de Janeiro', 'Rua B', '10'));
const cliente3 = new Cliente('Bernardo Silva', new TelefoneCelular('31', '777777777'), 'bernardo@app.com', new Endereco('MG', 'Belo Horizonte', 'Praça C', '200'));

const listaDesordenada = [cliente, cliente2, cliente3];
console.log("\n--- 3. Lista de Clientes Desordenada ---");
listaDesordenada.forEach(c => console.log(c.nome)); // Acessando via Getter 'nome'

const listaOrdenada = ordenarClientesPorNome(listaDesordenada);

console.log("\n--- 4. Lista de Clientes Ordenada (Alfabeticamente por Nome) ---");
listaOrdenada.forEach(c => console.log(c.nome));