# RI 2: Construção de Objetos, Get/Set e Ordenação em JavaScript

Este projeto é uma demonstração prática dos conceitos de Programação Orientada a Objetos (POO) em JavaScript (ES6+), focando em classes, encapsulamento com getters e setters, e ordenação de arrays de objetos.

## Objetivos

O script `src/ri2.js` foi desenvolvido para cumprir os seguintes objetivos:

1.  **Desenvolver Classes Construtoras**: Criação das classes `Cliente`, `TelefoneCelular` e `Endereco`.
2.  **Implementar Encapsulamento**: Utilização de métodos de acesso (Getters/Setters) para cada atributo.
3.  **Manipulação de Strings**: Inclusão de métodos para retornar o valor de strings em caixa alta (maiúsculas) e caixa baixa (minúsculas).
4.  **Método de Descrição Formatada**: Criação de um getter `descricao` para a classe `Cliente` que apresenta uma saída formatada com todas as informações do cliente.
5.  **Ordenação de Objetos**: Implementação de uma função para ordenar um array de clientes em ordem alfabética por nome.

## Conceitos Demonstrados

-   **Classes (ES6)**: Uso da sintaxe `class` para definir os objetos `Cliente`, `Endereco` e `TelefoneCelular`.
-   **Encapsulamento**: Proteção dos atributos das classes usando a convenção de prefixo `_` e expondo o acesso controlado através de `get` e `set`.
-   **Composição de Objetos**: A classe `Cliente` é composta por instâncias das classes `Endereco` e `TelefoneCelular`.
-   **Métodos de Instância**: Funções como `nomeCaixaAlta()` e `emailCaixaBaixa()` que operam sobre os dados de uma instância específica do objeto.
-   **Funções Puras**: A função `ordenarClientesPorNome` não modifica o array original, retornando uma nova lista ordenada.
-   **Array.prototype.sort()**: Uso do método `sort` com uma função de comparação customizada para ordenar objetos com base em um de seus atributos.

## Estrutura do Projeto

```
RI2_ObjetosGetSetESort/
└── src/
    └── ri2.js      # Contém todas as classes, lógica e testes
```

## Como Executar o Projeto

Para rodar este projeto, você precisará ter o Node.js instalado em sua máquina.

### Passos

1.  **Clone o repositório** (ou simplesmente tenha a pasta do projeto em seu computador).

2.  **Abra o terminal** (ou Prompt de Comando, PowerShell, etc.).

3.  **Navegue até a pasta raiz do projeto**:
    ```bash
    cd RI2_ObjetosGetSetESort
    ```

4.  **Execute o script** usando o Node.js:
    ```bash
    node src/ri2.js
    ```

### Saída Esperada

Após executar o comando acima, você deverá ver a seguinte saída no terminal, demonstrando a criação dos objetos, o uso dos métodos e a ordenação da lista de clientes:

```
--- 1. Saída Formatada (Cliente Exemplo) ---
Informações do Cliente:
Carlos Conrado Heinz
Email: carlos.conrado@app.com
Telefone:
DDD: 11
Número: 999999999
Endereço:
Rua: Av. Paulista
Número: 987
Cidade: São Paulo
Estado: SP

--- 2. Teste de Métodos Caixa Alta/Baixa e Get/Set Nativos ---
Nome Original (via getter): Carlos Conrado Heinz
Nome em CAIXA ALTA: CARLOS CONRADO HEINZ
Email em caixa baixa: carlos.conrado@app.com
Nome após SET nativo: Pedro Alvares Cabral

--- 3. Lista de Clientes Desordenada ---
Carlos Conrado Heinz
Alice Souza
Bernardo Silva

--- 4. Lista de Clientes Ordenada (Alfabeticamente por Nome) ---
Alice Souza
Bernardo Silva
Carlos Conrado Heinz
```
