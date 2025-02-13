# Projeto de Finanças Pessoais

Este projeto te ajuda a controlar suas despesas de forma fácil e eficiente. Ele utiliza uma arquitetura cliente-servidor, com o frontend desenvolvido em HTML, CSS e JavaScript, e o backend em Node.js. Os dados são armazenados em um arquivo `db.json`, que serve como um banco de dados simples em formato JSON. Além disso, o formato JSON é amplamente utilizado na comunicação entre o frontend e o backend, facilitando a troca de dados de forma estruturada.

## Funcionalidades

*   **Cadastro de despesas:** Registre suas despesas informando o valor e a categoria.
*   **Visualização de despesas:** Acompanhe suas despesas por período, categoria ou valor.
*   **Interface intuitiva:** Utilize o sistema de forma simples e prática.

## Tecnologias utilizadas

*   **Frontend:** HTML, CSS, JavaScript
*   **Backend:** Node.js
*   **Banco de dados:** `db.json` (arquivo JSON)

## Pré-requisitos

Antes de iniciar, certifique-se de ter o [Node.js](https://nodejs.org/en/) instalado na sua máquina.

## Instalação

1.  Clone este repositório: `git clone [https://github.com/leleo2009/Project-finances-with-JS]`
2.  Acesse o diretório do projeto: `cd [Project-finances-with-JS]`
3.  Instale as dependências do backend: `npm install`
4.  Instale as dependências do frontend: `npm install` (se necessário)

## Execução

1.  Inicie o servidor backend: `npm run serve`
2.  Inicie o servidor frontend: `npm start` (se necessário)
3.  Acesse o sistema no seu navegador: `http://localhost:[porta]`

## Observações sobre o db.json e o uso de JSON

Este projeto utiliza o formato JSON de duas formas principais:

1.  **Armazenamento de dados:** Um arquivo `db.json` é utilizado como um banco de dados simples para armazenar as informações sobre as despesas. Este arquivo está localizado na raiz do projeto e contém os dados em formato JSON. O backend do projeto, desenvolvido em Node.js, é responsável por ler e escrever os dados neste arquivo.  Lembre-se que `db.json` é uma solução simples para armazenamento de dados em projetos menores. Para projetos maiores, considere utilizar um banco de dados mais robusto.

2.  **Comunicação entre frontend e backend:** O formato JSON também é utilizado para trocar dados entre o frontend e o backend. Quando o frontend envia uma requisição para o backend (por exemplo, para cadastrar uma nova despesa), os dados são enviados em formato JSON. Da mesma forma, quando o backend envia uma resposta para o frontend (por exemplo, com a lista de despesas), os dados também estão em formato JSON. Essa forma de comunicação facilita a troca de informações de maneira estruturada e eficiente.

## Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Autor

Leonardo de Albuquerque Pereira