/**
 * RI 2 - Construção de Objetos, Encapsulamento (Get/Set) e Ordenação
 * * Objetivos:
 * 1. Desenvolver Funções Construtoras para Cliente, TelefoneCelular e Endereco. 
 * 2. Incluir métodos de acesso (Getters/Setters) para cada atributo. 
 * 3. Incluir métodos para retornar o valor de strings em caixa alta/baixa. 
 * 4. Criar um método 'descricao' (Get) com saída formatada para Cliente. 
 * 5. Criar uma função para ordenar um Array de clientes por nome. 
 */
import Cliente from "./Cliente.js";
import Endereco from "./Endereco.js";
import TelefoneCelular from "./TelefoneCelular.js";

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

// --- Testes e Saída ---

// Criação dos objetos (mantendo os nomes de variáveis do exemplo da atividade)
let telefone = new TelefoneCelular('11', '999999999');
let endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco);

console.log("----------------------");
console.log(cliente.descricao); // Teste do Getter 'descricao'


console.log("\n--- Teste de Métodos Caixa Alta/Baixa e Get/Set Nativos ---");
console.log(`Nome Original (via getter): ${cliente.nome}`); // Acesso direto ao getter
console.log(`Nome em CAIXA ALTA: ${cliente.nomeCaixaAlta()}`);
console.log(`Email em caixa baixa: ${cliente.emailCaixaBaixa()}`);

// Teste Setter: Mudança de Nome via sintaxe nativa
cliente.nome = "Pedro Alvares Cabral"; 
console.log(`Nome após SET nativo: ${cliente.nome}`);
cliente.nome = "Carlos Conrado Heinz"; // Volta ao original


// --- Teste de Ordenação ---
const cliente2 = new Cliente('Alice Souza', new TelefoneCelular('21', '888888888'), 'alice@app.com', new Endereco('RJ', 'Rio de Janeiro', 'Rua B', '10'));
const cliente3 = new Cliente('Bernardo Silva', new TelefoneCelular('31', '777777777'), 'bernardo@app.com', new Endereco('MG', 'Belo Horizonte', 'Praça C', '200'));

const listaDesordenada = [cliente, cliente2, cliente3];
console.log("\n--- Lista de Clientes Desordenada ---");
listaDesordenada.forEach(c => console.log(c.nome)); // Acessando via Getter 'nome'

const listaOrdenada = ordenarClientesPorNome(listaDesordenada);

console.log("\n--- Lista de Clientes Ordenada ---");
listaOrdenada.forEach(c => console.log(c.nome));